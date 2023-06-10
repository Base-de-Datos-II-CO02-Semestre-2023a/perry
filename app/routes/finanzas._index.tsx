import { ActionArgs, LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import { Links, Meta, Scripts, isRouteErrorResponse, useActionData, useLoaderData, useMatches, useNavigate, useRouteError, useRouteLoaderData } from "@remix-run/react";
import { FormEvent, useEffect, useState } from "react";
import ExtendedFAB from "~/components/ExtendedFAB";
import FAB from "~/components/FAB";
import InformacionCantidad from "~/components/InformacionCantidad";
import Tabla, { Header, Row } from "~/components/Tabla";
import { getUserSession } from "~/utils/sessions.server";
import GraficaLineas from "~/components/Linea";
import Overlay from "~/components/Overlay";
import css from "~/styles/rh.empleados.id.css"    
import InformacionGeneral from "~/components/InformacionGeneral";
import Button from "~/components/Button";
import { AgregarEmpleadoOverlay, agregarEmpleado } from "../components/AgregarEmpleadoOverlay";
import SearchBar from "~/components/SearchBar";


export default function Index() {

    const navigate = useNavigate();
    const matches = useMatches();
    
    

    function setNewEmpleado(arg0: boolean) {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <div className="row fit wrap no-grow" style={{
                justifyContent: "space-between",
            }}>
                <InformacionGeneral label={"ID"} content={"1"} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Nombre"} content={"1"} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Lugar"} content={"1"} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Cantidad"} content={"1"} variant={"line"} type={"filled"} />

                <div className="row fit grow1" style={{
                    width: "fit-content",
                    justifyContent: "flex-end"
                }}>
                    <Button type={"button"} variant={"filled"} className="primary" label="Agregar Artículo" onClick={() => { setNewEmpleado(true) }}/>
                    <Button type={"button"} variant={"filled"} className="warning" label="Modificar Artículo" onClick={()=>(true)} />
                    <Button type={"button"} variant={"filled"} className="error" label="Borrar Artículo" onClick={()=>(true)} />
                </div>
            </div>
            
        </>

    );
}

export function ErrorBoundary() {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return (
          <div className="error-container">
            <h1>
              {error.status} {error.statusText}
            </h1>
            <p>{error.data}</p>
          </div>
        );
      } else if (error instanceof Error) {
        return (
          <div className="error-container">
            <h1>Error</h1>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
          </div>
        );
      } else {
        return <h1 className="error-container">Unknown Error</h1>;
      }
  }
  