import { LinksFunction, LoaderArgs, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import InformacionCantidad from "~/components/InformacionCantidad";
import InformacionLugarBuscarRH from "~/components/InformacionLugarRH";
import SearchBar from "~/components/SearchBar";
import rhLugaresStylesUrl from "~/styles/rhLugares.css";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: rhLugaresStylesUrl },
    ];
}

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
    return {
        title:"Lugares"
    };
}
export default function Lugares() {
    return(<>
            <Outlet/>
        </>
    );
}