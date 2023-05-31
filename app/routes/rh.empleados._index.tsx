import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import InformacionCantidad from "~/components/InformacionCantidad";
import InformacionGeneral from "~/components/InformacionGeneral";
import Title from "~/components/Title";
export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
        
    return {
        title:"Empleados"
    };
}
export default function Index(){
    return(
        <>
        <h1>Hola mundo</h1>
            <InformacionGeneral label="ejemplo" content="ejemplo" variant="line" type="filled" />
            <InformacionGeneral label="ejemplo" content="ejemsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssstejkmelmsk" variant="default" type="filled"/>
            <InformacionCantidad variant={"pequeño"} type={"filled"} cantidad={5000} title={"ejemplo"}/>
            <InformacionCantidad variant={"mediano"} type={"filled"} cantidad={0} title={"Ejemplo"}/>        
        </>
    )
}