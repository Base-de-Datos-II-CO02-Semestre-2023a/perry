import { LinksFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Link, Outlet, useMatches, useSearchParams } from "@remix-run/react";
import Hero from "~/components/Hero";
import NavigationDrawer from "~/components/NavigationDrawerInv";
import Title from "~/components/Title";

import rhStylesUrl from "~/styles/rh.css";


export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
        
    return {
        title:"Inventario"
    };
}


export const links:LinksFunction = () => {
    return [{rel:"stylesheet", href:rhStylesUrl}]
}

export type NavItemType ={
    title:string,
    link:string,
    icon:string,
    end?:boolean
}

export default function inventario(){
    let links:NavItemType[] = [{
        title:"Inicio",
        link:"/inventario",
        icon:"home",
        end:true
    }]

    return(
        
       
        <>
            <NavigationDrawer links={links}/>
            <main>
                <Hero/>
                <Outlet />
            </main>
        </>
    );
} 