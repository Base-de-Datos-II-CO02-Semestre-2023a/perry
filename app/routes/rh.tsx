import { LinksFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Link, Outlet, useMatches, useSearchParams } from "@remix-run/react";
import Hero from "~/components/Hero";
import NavigationDrawer from "~/components/NavigationDrawer";
import Title from "~/components/Title";

import rhStylesUrl from "~/styles/rh.css";


export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
        
    return {
        title:"Recursos Humanos"
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

export default function rh(){
    let links:NavItemType[] = [{
        title:"Inicio",
        link:"/rh",
        icon:"home",
        end:true
    },{ 
        title:"Empleados",
        link:"./empleados",
        icon:"badge",
    },{
        title:"Lugares",
        link:"./lugares",
        icon:"storefront"
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