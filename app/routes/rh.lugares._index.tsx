import { LinksFunction, LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import InformacionLugarBuscarRH from "~/components/InformacionLugarRH";
import SearchBar from "~/components/SearchBar";
import { LugarRhBusqueda } from "~/types/Lugar";
import { searchAllLugaresRh, searchLugarRh } from "~/utils/lugar.api";
import  rhLugaresStylesUrl  from "~/styles/rh.lugares.css";
export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: rhLugaresStylesUrl },
    ];
}

export const loader: LoaderFunction = async ({ request }:LoaderArgs) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    console.log(searchParams);
    const searchValue = searchParams.get("searchValue");
    let data : any[] = [];
    let lugares :LugarRhBusqueda[]=[];

    if(!searchValue){
        lugares = await searchAllLugaresRh(request);
    } else {
        lugares = await searchLugarRh(request, searchValue); 
    }
    data = lugares.map((lugar)=>{
        return lugar
    })
    return {
        searchValue,
        title:"Empleados",
        data
    };
}

export default function Index(){
    const loaderData = useLoaderData<typeof loader>();
    const lugares = loaderData.data;
    return <>
        <SearchBar label={"Buscar lugar por nombre"}/>
        <section>
            {
                lugares.map((lugar:LugarRhBusqueda)=>{
                    return <InformacionLugarBuscarRH key={lugar.id} id={lugar.id.toString()} nombre={lugar.nombre} direccion={lugar.direccion} empleados={lugar.empleados} productividad={lugar.productividad} tipo={lugar.tipo} encargado={lugar.nombreEncargado}/>
                })
            }
        </section>
    </>

}