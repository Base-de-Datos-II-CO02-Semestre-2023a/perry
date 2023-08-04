import { ActionArgs, LoaderArgs, LoaderFunction, redirect } from "@remix-run/node"
import InformacionCantidad from "~/components/InformacionCantidad";
import Tabla, { Row } from "~/components/Tabla";
import { getContarEmpleadosVacaciones, getContratosConcluir, getEmpleados, infoRhLugar } from "~/utils/lugar.api"
import urlStylesLugarId from '~/styles/rh.lugares.id.css'
import ExtendedFAB from "~/components/ExtendedFAB";
import InformacionGeneral from "~/components/InformacionGeneral";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { EmpleadoEncontrado } from "~/types/Empleado";
import { NuevoContratoOverlay, registrarNuevoContrato } from "~/components/NuevoContratoOverlay";
import { AgregarEmpleadoOverlay, agregarEmpleado } from "~/components/AgregarEmpleadoOverlay";
import { useState } from "react";
import { getUserSession } from "~/utils/sessions.server";

export const links = () => [{ rel: "stylesheet", href: urlStylesLugarId }]

export const loader: LoaderFunction = async ({request, params}: LoaderArgs) => {
    const lugarInf = params.id && await infoRhLugar(request, params.id); 
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const searchValue = searchParams.get("searchValue");
    let empleados : Row[] = [];
    let data :EmpleadoEncontrado[]=[];
    data = params.id ? await getEmpleados(request, parseInt(params.id)):[];
    const [token]  = await getUserSession(request);
    empleados = data.map((empleado)=>{
        return {
            id:empleado.id,
            data:[empleado.rfc,empleado.nombre,empleado.puesto,empleado.salario.toString(),empleado.indiceProductividad.toString(),empleado.idLugar,empleado.fechaDeIngreso.toLocaleDateString() ]
        }
    })
    
    const contratos = params.id&& await getContratosConcluir(request, params.id);
    const empleadosVacaciones = params.id&& await getContarEmpleadosVacaciones(request, params.id)
    
    if (lugarInf) return {
        empleados,
        lugarInf,
        title: lugarInf.nombre,
        redirect: "/rh/lugares",
        contratos,
        empleadosVacaciones,
        token
    };
    else return redirect("/lugares")
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

export default function Lugar(){
    const loaderData = useLoaderData();
    const [agregarEmpleadoIsDisplayed, setIsAgregarEmpleadoDisplayed] = useState(false);
    const data = loaderData.lugarInf;
    const navigate = useNavigate();
    const openEmpleado = (id:string) => {
        navigate(`/rh/empleados/${id}?redirectTo=%2frh${data.id}`);
    };
    return <>
        <div className="row fit no-grow">
        <InformacionGeneral label={"Telefono"} content={data.telefono} variant={"default"} type={"transparent"}/> 
        <InformacionGeneral label={"Tipo"} content={data.tipo} variant={"default"} type={"transparent"}/> 
        <InformacionGeneral label={"Empleados"} content={data.empleados} variant={"default"} type={"transparent"}/> 
        <InformacionGeneral label={"Dirección"} content={data.direccion} variant={"default"} type={"transparent"}/> 
        <InformacionGeneral label={"Encargado"} content={data.nombreEncargado} variant={"default"} type={"transparent"}/> 
        <InformacionGeneral label={"Correo"} content={data.correo} variant={"default"} type={"transparent"}/> 
        </div>
        <div className="actionsBar">
            <ExtendedFAB onClick={()=>{}} icon={"sync_alt"} label={"Transferir empleado"} variant={"primary"}/>
            <ExtendedFAB onClick={()=>{setIsAgregarEmpleadoDisplayed(true)} } icon={"add"} label={"Nuevo empleado"} variant={"tertiary"}/> 
        </div>
        <div className="grid-4-3">
            <Tabla headers={[]} rows={loaderData.empleados} onRowSelected={(index)=>openEmpleado(index)}
            />
            <InformacionCantidad id="b" variant={"grande"} type={"filled"} cantidad={loaderData.empleadosVacaciones} title={"Empleados de vacaciones"}/>
            <InformacionCantidad id="c" variant={"grande"} type={"filled"} cantidad={loaderData.contratos} title={"Contratos proximos a concluir"}/>
            <InformacionCantidad id="d" variant={"grande"} type={"filled"} cantidad={data.productividad.toFixed(2)} title={"Productividad"}/>
        </div>
        <AgregarEmpleadoOverlay isDisplayed={agregarEmpleadoIsDisplayed} setDisplayed={setIsAgregarEmpleadoDisplayed} token={loaderData.token}/>
    </>
}