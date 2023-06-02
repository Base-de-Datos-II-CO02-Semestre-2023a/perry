import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import FAB from "~/components/FAB";
import InformacionCantidad from "~/components/InformacionCantidad";
import InformacionDinero from "~/components/InformacionDinero";
import InformacionGeneral from "~/components/InformacionGeneral";
import Title from "~/components/Title";
import { Option } from "~/components/InputMenu";
import InputMenu from "~/components/InputMenu";
import TextField from "~/components/TextField";
import SearchBar from "~/components/SearchBar";
import { useSearchParams } from "@remix-run/react";
import Tabla, { Header, Row } from "~/components/Tabla";
export const loader: LoaderFunction = async ({ request }:LoaderArgs) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    return {
        title:"Empleados"
    };
}
export default function Index(){
    const [searchParams]=useSearchParams()
    const searchValue = searchParams.get("searchValue")
    const headers = ["RFC","Nombre","Puesto","Sueldo", "Prod", "Lugar", "Fecha Ingreso"]

    const rows:Row[]=[{
        id:"ejemploderfc",
        data:["ejemploderfc23","Ejemplo de nombre","Ejemplo de puesto","$1000","0.95","Ejemplo de lugar","Ejemplo de fecha"]
    }]

    const suggestEmpleados = (empleado:string)=>{
        return [{
            name:"ejemploderfc",
            value:"ejemploderfc"
        }] as Option[]
    }

    return(
        <>  
            <SearchBar label={"Buscar empleados por RFC"} searchSuggestFunction={suggestEmpleados}
                maxLenght={13}
            />
            <Tabla headers={headers} rows={rows} onRowSelected={function (index: any): void {
                throw new Error("Function not implemented.");
            } }/>
        </>
    )
}