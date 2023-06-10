import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import InformacionLugar, { dataLugar } from "~/components/InformacionLugar";

export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
    let lugares: dataLugar[] = [{
        id:1,
        nombre: "Nombre lugar 1",
        dir: "Calle de ejemplo #28, Ejemplo, Ejemplo C.P. 50000",
        percent: 85,
        proxCad: 2,
        distinct: 105,
        reabast: 0
    },{
        id:2,
        nombre: "Nombre lugar 2",
        dir: "Calle de ejemplo #28, Ejemplo, Ejemplo C.P. 50000",
        percent: 85,
        proxCad: 2,
        distinct: 105,
        reabast: 0
    },{
        id:3,
        nombre: "Nombre lugar 3",
        dir: "Calle de ejemplo #28, Ejemplo, Ejemplo C.P. 50000",
        percent: 85,
        proxCad: 2,
        distinct: 105,
        reabast: 0
    },{
        id:4,
        nombre: "Nombre lugar 4",
        dir: "Calle de ejemplo #28, Ejemplo, Ejemplo C.P. 50000",
        percent: 85,
        proxCad: 2,
        distinct: 105,
        reabast: 0
        }];

    return {
        title: "Lugares",
        lugares
    };
}

export default function Index() {
    const loaderData = useLoaderData<typeof loader>();
    const navigate = useNavigate();
    const openLugar = (id:string) => {
        navigate(`/inventario/lugares/${id}?`);
    };
    return (
        <div className="containerLugares">
            {
                loaderData.lugares.map((lugar: dataLugar)=>
                    <InformacionLugar data={lugar}  onClick={openLugar}/>
                )
            }
        </div>
    );
}