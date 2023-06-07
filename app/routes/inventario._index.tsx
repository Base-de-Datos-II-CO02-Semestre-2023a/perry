import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import InformacionCantidad from "~/components/InformacionCantidad";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
     
    return {
        title:"Inventario"
    };
}

export default function Index(){
    
    return (
        <>
        <div className="row items-center">
            <section className="row center">
                <InformacionCantidad variant="grande" type="filled" cantidad={0} title="Abastecimientos recomendados"/>
                <InformacionCantidad variant="grande" type="filled" cantidad={250} title="Articulos distintos"/>
                <InformacionCantidad variant="grande" type="filled" cantidad={55} title="Del espacio usado"/>
                <InformacionCantidad variant="grande" type="filled" cantidad={5} title="Productos proximos a caducar"/>
            </section>
        </div>
        </>
    );
}