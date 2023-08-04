import { ActionArgs, LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import { Links, Meta, Scripts, isRouteErrorResponse, useActionData, useLoaderData, useMatches, useNavigate, useRouteError, useRouteLoaderData } from "@remix-run/react";
import { FormEvent, useEffect, useState } from "react";
import ExtendedFAB from "~/components/ExtendedFAB";
import FAB from "~/components/FAB";
import InformacionCantidad from "~/components/InformacionCantidad";
import Tabla, { Header, Row } from "~/components/Tabla";
import { Empleado } from "~/types/Empleado";
import { getContarEmpleadosVacaciones, getEmpleadosMasProductivos, getEmpleadosMenosProductivos, getPromedioProductividad, registrarEmpleado } from "~/utils/empleados.server";
import { getUserSession } from "~/utils/sessions.server";
import { AgregarEmpleadoOverlay, agregarEmpleado } from "../components/AgregarEmpleadoOverlay";
import Overlay from "~/components/Overlay";
import InformacionGeneral from "~/components/InformacionGeneral";
import { registrarNuevoContrato } from "~/components/NuevoContratoOverlay";
import { getContratosConcluir } from "~/utils/contratos.api";

export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
    
    let empleados = await getEmpleadosMasProductivos(request);
    let productivos: Row[] = [];
    if (empleados) {
        productivos = empleados.map((empleado) => {
            return {
                id: empleado.id,
                data: [empleado.nombre, empleado.indiceProductividad]
            } as Row;
        })
    }


    empleados = await getEmpleadosMenosProductivos(request);
    let inproductivos: Row[] = [];
    if (empleados) {
        inproductivos = empleados.map((empleado) => {
            return {
                id: empleado.id,
                data: [empleado.nombre, empleado.indiceProductividad]
            } as Row;
        })
    }

    let [token] = await getUserSession(request);

    let response = await getContarEmpleadosVacaciones(request);
    const empleadosVacaciones = response?.empleados;

    const productividad =await getPromedioProductividad(request);

    return {
        title: "Inicio",
        productivos,
        inproductivos,
        token,
        empleadosVacaciones,
        contratos: await getContratosConcluir(request),
        productividad
    };
}



export const action = async ({ request }: ActionArgs) => {
    const fromulario = await request.formData();

    const overlay = fromulario.get("action") as string;
    
    switch (overlay) {
        case "agregarEmpleado":
            return await agregarEmpleado(fromulario, request);
        case "nuevoContrato":
            return await registrarNuevoContrato(fromulario, request);
    }
    return {
        status: 500,
        formError:"Error"
    }
}


export default function Index() {

    const navigate = useNavigate();
    const matches = useMatches();
    
    const actionData = useActionData<typeof action>();
    const loaderData = useLoaderData<typeof loader>()
    
    const [newEmpleado, setNewEmpleado] = useState(false);
    
    const openEmpleado = (id: string) => {
        navigate(`/rh/empleados/${id}?redirectTo=%2f`);
    };
    
    const headers = ["Nombre", "Prod"];

    return (
        <>
            <div className="actionsBar">
                {/*<ExtendedFAB icon="add" label="Crear objetivo" variant="primary" onClick={() => { }} />
                <ExtendedFAB icon="add" label="Registrar falta" variant="primary" onClick={() => { }} />*/}
                <ExtendedFAB icon="add" label="Nuevo empleado" variant="tertiary" onClick={() => { setNewEmpleado(true) }} />
                {/*<ExtendedFAB icon="sync_alt" label="Transferir empleado" variant="primary" onClick={() => { }} />
                <ExtendedFAB icon="edit" label="Modificar contrato" variant="primary" onClick={() => { }} />*/}
            </div>  
            <div className="row">
                <section className="card">
                    <h3 className="header-large on-surface-variant-text">Empleados más productivos</h3>
                    <Tabla headers={headers} rows={loaderData.productivos} onRowSelected={openEmpleado} />
                </section>
                <section className="card">
                    <h3 className="header-large on-surface-variant-text">Empleados menos productivos</h3>
                    <Tabla headers={headers} rows={loaderData.inproductivos} onRowSelected={openEmpleado} />
                </section>
                <section className="column fit">
                    <InformacionCantidad variant="grande" type="filled" cantidad={loaderData.empleadosVacaciones} title="Empleados de vacaciones" />
                    <InformacionCantidad variant="grande" type="filled" cantidad={loaderData.contratos} title="Contratos proximos a concluir" />
                    <InformacionCantidad variant="grande" type="filled" cantidad={loaderData.productividad} title="Promedio de productividad" />
                </section>
            </div>
            <AgregarEmpleadoOverlay isDisplayed={newEmpleado} setDisplayed={setNewEmpleado} token={loaderData.token}/>
            <TransferirEmpleadoOverlay/>
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
  

  export function TransferirEmpleadoOverlay(){
        return (
            <>
               
            </>
        );
  }