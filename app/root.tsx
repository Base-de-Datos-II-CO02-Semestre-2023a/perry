import { cssBundleHref } from "@remix-run/css-bundle";
import { LinksFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import globalStylesUrl from "~/styles/global.css";
import { getUserSession } from "./utils/sessions.server";
import { useEffect } from "react";
export const links: LinksFunction = () => [
  //...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet",  href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}
];

export default function App() {

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
  }, [])
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
