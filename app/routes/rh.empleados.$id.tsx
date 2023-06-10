import { ActionArgs, ActionFunction, LinksFunction, LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData, useMatches } from "@remix-run/react";
import { useState } from "react";
import { despedirEmpleado, getEmpleado, getHistorialProductividad } from "~/utils/empleados.server";
import { EmpleadoInfo } from "~/types/Empleado";
import InformacionGeneral from "~/components/InformacionGeneral";
import Button from "~/components/Button";
import InformacionCantidad from "~/components/InformacionCantidad";
import { dataSet } from "~/components/Linea";

import GraficaLineas from "~/components/Linea";
import Overlay from "~/components/Overlay";

import css from "~/styles/rh.empleados.id.css"

export const links: LinksFunction = ()=>{
    return[{href: css, rel:"stylesheet"}];
}


export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {

    const empleado = params.id && await getEmpleado(request, params.id) as EmpleadoInfo;
    const requestProductividad = params.id && empleado && await getHistorialProductividad(request, params.id);
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const productividad = requestProductividad && requestProductividad.map((p) => {
        return p.productividad;
    });

    const labels = requestProductividad && requestProductividad.map((p) => {
        return meses[p.mes - 1];
    });

    if (empleado) return {
        empleado,
        productividad,
        labels,
        title: empleado.nombre,
        redirect: "/rh/empleados"
    };

   
    return redirect("/rh/empleados");
}

export const action: ActionFunction = async ({request, params}:ActionArgs) => {
    const form = await request.formData();    
    const action = form.get("action");
    switch(action){
        case "despedir":
            const response = params.id && await despedirEmpleado(request, params.id);
            

            if(response.status == 200) return redirect( "/rh/empleados");
            else return response;
    }
    return null;
}



export default function Empleado() {
    const matches = useMatches()
    const loaderData = useLoaderData<typeof loader>();
    const infoEmpleado = loaderData.empleado as EmpleadoInfo;
    const dataSets = [{
        label: "Productividad",
        data: loaderData.productividad,
        }
    ] as dataSet[];
    const [isDespedirDisplayed, setIsDespedirDisplayed] = useState(false);


    return (
        <>
            <div className="row fit wrap no-grow" style={{
                justifyContent: "space-between",
            }}>
                <InformacionGeneral label={"RFC"} content={infoEmpleado.rfc} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"NSS"} content={infoEmpleado.nss.toString()} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Telefono"} content={infoEmpleado.telefono.toString()} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Puesto"} content={infoEmpleado.puesto} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Lugar"} content={infoEmpleado.nombreLugar} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Direccion"} content={infoEmpleado.direccion} variant={"line"} type={"filled"} />
                <InformacionGeneral label={"Correo"} content={infoEmpleado.correo} variant={"line"} type={"filled"} />
                <div className="row fit grow1" style={{
                    width: "fit-content",
                    justifyContent: "flex-end"
                }}>
                    <Button type={"button"} variant={"filled"} className="primary" label="Modificar contrato" />
                    <Button type={"button"} variant={"outlined"} className="error" label="Despedir" onClick={()=>setIsDespedirDisplayed(true)} />
                </div>
            </div>
            <div className="grid-4-3">
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={infoEmpleado.salario} title={"Sueldo"} id='a' />
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={0} title={"Vacaciones restantes"} id='b' />
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={0} title={"Faltas(Disciplinarias)"} id='c' />
                <GraficaLineas dataSets={dataSets} labels={loaderData.labels} id="d" title="Historial de productividad"/>
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={infoEmpleado.diasInicio ? infoEmpleado.diasInicio : Infinity} title={"Días en la empresa"} id="e" />
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={infoEmpleado.diasFin ? infoEmpleado.diasFin : Infinity} title={"Días para fin de contrato"} id="f" />
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={0} title={"Avance de Objetivos"} id="g" />
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={0} title={"Inasistencias"} id="h" />
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={parseFloat(infoEmpleado.indiceProductividad.toFixed(2))} title={"Indice de productividad"} id="i" />
            </div>
            { isDespedirDisplayed && <Overlay name={"despedir"} action={""} onSecundary={()=>setIsDespedirDisplayed(false)} dangerText="Despedir" secondaryText="Cancelar" onDanger={()=>setIsDespedirDisplayed(false)} isCancelable={()=>setIsDespedirDisplayed(false)} >
                <h1 className="title-large">¿Estás seguro de que quieres despedir a {infoEmpleado.nombre}?</h1>
            </Overlay>}

        </>

    );
}