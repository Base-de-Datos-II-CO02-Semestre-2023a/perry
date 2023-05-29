import { LoaderFunction, V2_MetaFunction, json, redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Empleado, getUserData } from "~/utils/empleados.server";
import { badRequest } from "~/utils/request.server";
import { getUserSession } from "~/utils/sessions.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const loader: LoaderFunction = async ({ request }) => {
  const [token,user,puesto] = await getUserSession(request);

  if(!token){
    return redirect('/login');
  }

  switch (puesto) {
    case 'Admin':
      return redirect('/admin');
    case 'Recursos_Humanos':
      return redirect('/rh');
    case 'Ventas':
      return redirect('/ventas');
    case 'Finanzas':
      return redirect('/finanzas');
    case 'Inventario':
      return redirect('/inventario');
    default:
      return json({ error:"Ocurrio un error" });
  }
}


export default function Index() {


  return (
    <>
    <Outlet/>
    </>
  );
}

