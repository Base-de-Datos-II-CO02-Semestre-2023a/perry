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
import { useActionData, useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";
import Tabla, { Header, Row } from "~/components/Tabla";
import { buscarEmpleadosPorRFC, getContarEmpleadosVacaciones, getEmpleados } from "~/utils/empleados.server";
import { Empleado, EmpleadoEncontrado } from "~/types/Empleado";
export const loader: LoaderFunction = async ({ request }:LoaderArgs) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const searchValue = searchParams.get("searchValue");
    let data : Row[] = [];
    let empleados :EmpleadoEncontrado[]=[];

    if(!searchValue){
       
        empleados = await getEmpleados(request);
    } else {
        empleados = await buscarEmpleadosPorRFC(request, searchValue);
        
    }

    data = empleados.map((empleado)=>{
        return {
            id:empleado.id,
            data:[empleado.rfc,empleado.nombre,empleado.puesto,empleado.salario.toString(),empleado.indiceProductividad.toString(),empleado.idLugar,empleado.fechaDeIngreso.toLocaleDateString() ]
        }
    })

    

    return {
        searchValue,
        title:"Empleados",
        data
    };
}
export default function Index(){
    const [searchParams]=useSearchParams()
    const searchValue = searchParams.get("searchValue")
    const headers = ["RFC","Nombre","Puesto","Sueldo", "Prod", "Lugar", "Fecha Ingreso"]
    const navigate = useNavigate()
    const loaderData = useLoaderData<typeof loader>();
    const openEmpleado = (id:string) => {
        navigate(`/rh/empleados/${id}`);
    };
    return(
        <>
            <SearchBar label={"Buscar empleados por RFC, nombre o correo"}
                value={searchValue?searchValue:""}
            />
            <Tabla headers={headers} rows={loaderData.data} onRowSelected={openEmpleado }/>
        </>
    )
}