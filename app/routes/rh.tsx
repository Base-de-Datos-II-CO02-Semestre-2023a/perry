import { LinksFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { Link, Outlet, useMatches } from "@remix-run/react";
import Button from "~/components/Button";
import Hero from "~/components/Hero";
import Icon from "~/components/Icon";
import InformacionGeneral from "~/components/InformacionGeneral";
import NavItem from "~/components/NavItem"
import NavigationDrawer from "~/components/NavigationDrawer";
import Title from "~/components/Title";
import { getUserSession, hasAuth } from "~/utils/sessions.server";

import rhStylesUrl from "~/styles/rh.css";

export const links:LinksFunction = () => {
    return [{rel:"stylesheet", href:rhStylesUrl}]
}

export type NavItemType ={
    title:string,
    link:string,
    icon:string,
    end?:boolean
}

export const loader: LoaderFunction = async ({ request }) => {
    
    return hasAuth(request, "Recursos_Humanos");
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