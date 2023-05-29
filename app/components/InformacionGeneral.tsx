export default function InformacionGeneral(props:{label:string, content:string, type:"filled"|"transparent"}) {
    return(
        <div aria-disabled className={"informacion general "+(props.type)}>
            <label className="label-small">{props.label}</label>
            <p className="title-small">{props.content}</p>
        </div>
    )
}