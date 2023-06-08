import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ChartLine, { ConfigChart, dataChart } from "~/components/ChartLine";
import InformacionCantidad from "~/components/InformacionCantidad";

export const loader: LoaderFunction = async ({ request, params }:LoaderArgs) => {
    let data = {
        labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
        datasets: [
            {
                label:  "2023",
                data: [10,40,40,50,34,15],
                borderColor: "rgb(255,0,0)",
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
            },
            {
                label:  "2022",
                data: [25,35,48,67,36,45],
                borderColor: "rgb(0,255,0)",
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
            },
            {
                label:  "2021",
                data: [35,20,58,78,48,75],
                borderColor: "rgb(0,0,255)",
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
            }
        ]
    } as dataChart;
    let conf = {
        responsive: true,
        displayTitle: true,
        title: "Uso de almacenamiento por mes"
    } as ConfigChart;
    return {
        conf,
        data,
        title:"Inventario"
    };
}

export default function Index(){
    const loaderData = useLoaderData<typeof loader>()
    return (
        <>
        <div className="row center">
            <ChartLine config={loaderData.conf} data={loaderData.data}/>
        </div>
        <div className="row">
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