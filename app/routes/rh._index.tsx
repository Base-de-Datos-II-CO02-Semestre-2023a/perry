import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useMatches, useNavigate, useRouteLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import ExtendedFAB from "~/components/ExtendedFAB";
import InformacionCantidad from "~/components/InformacionCantidad";
import Tabla, { Header, Row } from "~/components/Tabla";
import { getEmpleadosMasProductivos, getEmpleadosMenosProductivos } from "~/utils/empleados.server";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    let empleados = await getEmpleadosMasProductivos(request);
    let productivos: Row[]=[];
    if (empleados){
        productivos = empleados.map((empleado) => {
            return {
                id:empleado.rfc,
                data:[empleado.nombre, empleado.indiceProductividad]
            } as Row;
        })
    }

    
    empleados = await getEmpleadosMenosProductivos(request);
    let inproductivos: Row[]=[];
    if(empleados){
        inproductivos = empleados.map((empleado)=>{
            return{
                id:empleado.rfc,
                data:[empleado.nombre, empleado.indiceProductividad]
            } as Row;
        })
    }

        
    return {
        title:"Inicio",
        productivos,
        inproductivos
    };
}
export default function Index(){
    const matches = useMatches();
    const navigate = useNavigate();
    const loaderData = useLoaderData<typeof loader>()
    const openEmpleado = (id:string) => {
        navigate(`/rh/empleados/${id}?redirectTo=%2f`);
    };
    const headers= ["Nombre", "Prod"];
    
    return (
        <>
        <div className="actionsBar">
            <ExtendedFAB icon="add" label="Crear objetivo" variant="primary" onClick={()=>{}}/>
            <ExtendedFAB icon="add" label="Registrar falta" variant="primary" onClick={()=>{}}/>
            <ExtendedFAB icon="add" label="Nuevo empleado" variant="tertiary" onClick={()=>{}}/>
            <ExtendedFAB icon="sync_alt" label="Transferir empleado" variant="primary" onClick={()=>{}}/>
            <ExtendedFAB icon="edit" label="Modificar contrato" variant="primary" onClick={()=>{}}/>
        </div>
        <div className="row">
            <section className="card">
                <h3 className="header-large on-surface-variant-text">Empleados más productivos</h3>
                <Tabla headers={headers} rows={loaderData.productivos} onRowSelected={openEmpleado}/>
            </section>
            <section className="card">
                <h3 className="header-large on-surface-variant-text">Empleados menos productivos</h3>
                <Tabla headers={headers} rows={loaderData.inproductivos} onRowSelected={openEmpleado}/>
            </section>
            <section className="column fit">
                <InformacionCantidad variant="grande" type="filled" cantidad={56} title="Empleados de vacaciones"/>
                <InformacionCantidad variant="grande" type="filled" cantidad={56} title="Contratos proximos a concluir"/>
                <InformacionCantidad variant="grande" type="filled" cantidad={56} title="Promedio de productividad"/>
            </section>
        </div>
        </>
    );
}