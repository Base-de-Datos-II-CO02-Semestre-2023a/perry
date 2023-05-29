import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { badRequest } from "./request.server";
import { fetch } from "@remix-run/node";
import {url} from "./api.config";
import { Empleado } from "./empleados.server";

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
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function login(username: string, password: string, redirectTo: string){
  if (typeof username !== 'string' || typeof password !== 'string') {
    return badRequest({
        formError: 'Los datos enviados no son válidos'
    });
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "password": password,
    "rfc": username
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
      status = response.status;
  } catch (error:any) {
      return badRequest({
        formError: "Error al conectarse al servidor"
      });
  }

  if (status !== 200) {
      return badRequest({
          status:status,
          formError:data.error
      });
  }

  let token = data.jwt_token;
  let user = data.user;
  let puesto = data.puesto;

  return createUserSession(token, user, puesto, redirectTo);

}

export async function getSessionCookies(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return session;
}

export async function getUserSession(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const token = session.get("token") as string | undefined;
  const user = session.get("user") as string | undefined;
  const puesto = session.get("puesto") as string | undefined;
  return [token, user, puesto];
}

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

export async function hasAuth(request:Request, puesto:string) {
  const [token, user, p] = await getUserSession(request);
  if (token && puesto === p) {
    return true;
  }
  return redirect("/");
}