import { LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, useMatches, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { Empleado, getEmpleadoByRfc } from "~/utils/empleados.server";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
    const empleado = await getEmpleadoByRfc(request, params.rfc)as Empleado;
    
    if (empleado) return {
        empleado,
        title:empleado.nombre,
        redirect:"/rh/empleados"
    };
    return{
        empleado
    }
}

export default function Empleado(){
    const matches = useMatches()
   
    return(
        <h1>
        </h1>
        
    );
}