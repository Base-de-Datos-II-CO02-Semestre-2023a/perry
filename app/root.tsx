import { cssBundleHref } from "@remix-run/css-bundle";
import { LinksFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useResolvedPath,
} from "@remix-run/react";


import globalStylesUrl from "~/styles/global.css";
import { getUserSession } from "./utils/sessions.server";
import { useEffect } from "react";


export const links: LinksFunction = () => [
  //...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet",  href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
];

export const loader: LoaderFunction = async ({ request }) => {
  const [token, user, puesto] =await getUserSession(request);
  let root = "";
  if (token) {
    switch (puesto) {
      
      case 'Admin':
         root = 'admin';
         break;
      case 'Ventas':
        root = 'ventas';
        break;
      case 'Recursos_Humanos':
        root = 'rh';
        break;
      case 'Inventario' :
        root = 'inventario';
        break;
      case 'Finanzas':
        root = 'finanzas';
        break;
    }

    return {root}
  }
  if(request.url.includes('/login') || request.url.includes('/asistencia')){
    return {root:null};
  }
  return redirect('/login');
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = useLoaderData<typeof loader>();
  
  useEffect(() => {
    if (!location.pathname.includes(data.root) && data.root != null){
      navigate(`/${data.root}`);
    }
  }, [location]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
