import { LinksFunction, LoaderArgs, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Hero from "~/components/Hero";
import NavigationDrawer from "~/components/NavigationDrawer";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
        
    return {
        title:"Inventario"
    };
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
        link:"/inventario",
        icon:"home",
        end:true
    },{
        title:"Lugares",
        link:"./lugares",
        icon:"storefront"
    }]

    return(
        <>
            <NavigationDrawer links={links} />
            <main>
                <Hero/>
                <Outlet />
            </main>
        </>
    );
} 