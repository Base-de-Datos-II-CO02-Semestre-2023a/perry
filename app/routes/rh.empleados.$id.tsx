import { LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, useMatches, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { getEmpleado } from "~/utils/empleados.server";
import { Empleado } from "~/types/Empleado";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
    const empleado = await getEmpleado(request, params.id)as Empleado;
    
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