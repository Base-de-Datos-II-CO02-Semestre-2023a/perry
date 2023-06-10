import InformacionCantidad from "./InformacionCantidad";
import InformacionGeneral from "./InformacionGeneral";

export type dataLugar = {
    id: number,
    nombre: string,
    dir: string,
    percent: number,
    proxCad: number,
    distinct: number,
    reabast: number,
}

export default function (props:{data:dataLugar, onClick:(index:any)=>void}){
    return(
        <div className="cardLugar">
            <p className="nombreLugar" onClick={()=>props.onClick(props.data.id)}>{props.data.nombre}</p>
            <InformacionGeneral label={"Direccion"} content={props.data.dir} variant={"line"} type={"filled"} />
            <section className="row stretch">
                <InformacionCantidad variant={"grande"} type={"filled"} cantidad={props.data.percent} title={"% del espacio usado"} />
                <section className="column">
                    <InformacionCantidad variant={"pequeño"} type={"filled"} cantidad={props.data.proxCad} title={"Proximos a caducar"} />
                    <InformacionCantidad variant={"pequeño"} type={"filled"} cantidad={props.data.distinct} title={"Productos distintos"} />
                    <InformacionCantidad variant={"pequeño"} type={"filled"} cantidad={props.data.reabast} title={"Reabastecimientos"} />
                </section>
            </section>
        </div>
    );
}