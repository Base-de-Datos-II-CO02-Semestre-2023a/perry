import { LinksFunction, LoaderArgs, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
        
    return {
        title:"Empleados"
    };
}
export default function Empleados(){
    return(
        <>
        <Outlet/>
        </>
    );
}