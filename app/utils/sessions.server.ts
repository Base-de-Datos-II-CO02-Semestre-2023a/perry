import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { badRequest } from "./request.server";
import { fetch } from "@remix-run/node";
import {url} from "./api.config";
import { Empleado } from "../types/Empleado";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",

    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 ,
    httpOnly: true,
  },
});

/**
 * Sirve para autenticar al usuario, normalmente es llamada desde "/login"
 * @param username RFC del usuario
 * @param password Contraseña del usuario
 * @param redirectTo Ruta a la que se redirigirá al usuario en caso de que el login sea exitoso, en caso de no existir, esta será "/"
 * @returns badRequest con informacion del error, createUserSession con la sesion del usuario en caso de que el login sea exitoso
 */
export async function login(username: string, password: string, redirectTo: string){
  if (typeof username !== 'string' || typeof password !== 'string') {
    return {
      status:400,
      detail: "Datos ingresados no validos"
    };
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "password": password,
    "rfc": username,
  });

  var requestOptions:RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };
  var status = 0;
  var data = null;
  try {
      let request = fetch(`${url}/auth/login`, requestOptions);
      let response = await request;
      data = await response.json();
      console.log(data)
      status = response.status;
  } catch (error:any) {
      return {
        status: 500,
        formError: "Error desconocido"
      };
  }

  if (status !== 200) {
      return{
          status:status,
          formError:data.detail
      };
  }

  let token = data.jwt_token;
  let user = data.user;
  let puesto = data.puesto;
  

  return createUserSession(token, user, puesto, redirectTo);

}

/**
 * Sirve para retornar la cookie de sesion, esta es usada por más funciones, no es usada por nada del cliente
 * @param request Este parametro es el request que se recibe cada que se consulta una pagina
 * @returns [token, user, puesto] un conjunto de strings que representan el token, el usuario y el puesto del usuario que esta loggeado
 */
export async function getSessionCookies(request: Request) {
  return (await storage.getSession(request.headers.get("Cookie")));
}


/**
 * Extrae los datos de la sesion de usuario que está haciendo la peticion de una pagina
 * @param request Este parametro es el request que se recibe cada que se consulta una pagina
 * @returns [token, user, puesto] un conjunto de strings que representan el token, el usuario y el puesto del usuario que esta loggeado
 */
export async function getUserSession(request: Request) {
  const session = await getSessionCookies(request);
  const token = session.get("token") as string | undefined;
  const user = session.get("user") as string | undefined;
  const puesto = session.get("puesto") as string | undefined;
  return [token, user, puesto];
}

/**
 * 
 * @param token Token de la sesion
 * @param user Usuario de la sesion
 * @param puesto Puesto del usuario de la sesion
 * @param redirectTo Ruta a la que se redirigirá al usuario en caso de que el login sea exitoso, en caso de no existir, esta será "/"
 * @returns 
 */
export async function createUserSession(
  token: string,
  user:string,
  puesto:string,
  redirectTo: string
) {
  const session = await storage.getSession();
  session.set("token", token);
  session.set("user", user);
  session.set("puesto", puesto);
  console.log("redirect to" + redirectTo)
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSessionCookies(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
