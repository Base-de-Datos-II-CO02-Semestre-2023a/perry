import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData, useMatches } from "@remix-run/react";
import { useState } from "react";
import { despedirEmpleado, getEmpleado, getHistorialProductividad } from "~/utils/empleados.server";
import { Empleado, EmpleadoInfo } from "~/types/Empleado";
import InformacionGeneral from "~/components/InformacionGeneral";
import Button from "~/components/Button";
import InformacionCantidad from "~/components/InformacionCantidad";
import { dataSet } from "~/components/Linea";

import GraficaLineas from "~/components/Linea";
import Overlay from "~/components/Overlay";

import css from "~/styles/rh.emp.id.css"

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

export default function Ejemplo() {
    
    

    return (
        <>
    
               
            

        </>

    );
}
