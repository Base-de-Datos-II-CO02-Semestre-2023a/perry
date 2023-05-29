import { LinksFunction } from "@remix-run/node";



export const handle ={
    title: () => "Empleados"
}

export default function Empleados(){
    return(
        <h2>Empleados</h2>
    );
}