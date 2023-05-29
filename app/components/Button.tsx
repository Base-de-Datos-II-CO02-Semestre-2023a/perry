
import Icon from './Icon';

export default function Button(props: { className?:string,icon?:string,disabled?:boolean, color?: string, label: string, type: "button" | "submit" | "reset" | undefined, variant:"filled" | "outlined" | "text" | "elevated" | "text" | "tonal"  }) {
    
    return (
        <>
            <button 
            type={props.type} 
            style={!props.icon ? {padding:"10px 24px"}:{}} 
            className={props.variant+" "+props.className+" "+props.color} 
            disabled={props.disabled} 
            >
                {props.icon && <Icon icon={props.icon} type="outlined"/>}
                <p className='label-large'>{props.label}</p>
                <div className={'state-layer on-primary'}/>
            </button>
        </>
    );
}