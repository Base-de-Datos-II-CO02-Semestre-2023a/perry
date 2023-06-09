import { LinksFunction, LoaderArgs, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";


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