import { LoaderArgs, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    
    return {
        title:"Lugares"
    };
}
export default function Lugares() {
}