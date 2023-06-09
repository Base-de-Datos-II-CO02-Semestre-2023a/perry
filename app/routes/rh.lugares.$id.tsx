import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, redirect } from "@remix-run/node"
import InformacionCantidad from "~/components/InformacionCantidad";
import Tabla from "~/components/Tabla";
import { infoRhLugar } from "~/utils/lugar.api"
import urlStylesLugarId from '~/styles/rh.lugares.id.css'

export const links = () => [{ rel: "stylesheet", href: urlStylesLugarId }]

export const loader: LoaderFunction = async ({request, params}: LoaderArgs) => {
    const lugarInf = params.id && await infoRhLugar(request, params.id); 
    console.log(lugarInf)
    if (lugarInf) return {
        lugarInf,
        title: lugarInf.nombre,
        redirect: "/rh/lugares"
    };
}

export default function Lugar(){
    return <>
        <div className="grid-4-3">
            <Tabla headers={[]} rows={[]} onRowSelected={function (index: any): void {
                throw new Error("Function not implemented.");
            } }/>
            <InformacionCantidad id="b" variant={"grande"} type={"filled"} cantidad={0} title={""}/>
            <InformacionCantidad id="c" variant={"grande"} type={"filled"} cantidad={0} title={""}/>
            <InformacionCantidad id="d" variant={"grande"} type={"filled"} cantidad={0} title={""}/>
        </div>
    </>
}