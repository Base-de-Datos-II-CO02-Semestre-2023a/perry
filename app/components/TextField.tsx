import { ChangeEventHandler, InputHTMLAttributes, useRef } from "react";
import Icon from "./Icon";


export default function TextField(props: {icon?:string, label: string, name: string, type: string, variant: "outlined", onChange?: ChangeEventHandler<HTMLInputElement>, isValid: boolean, min?:string|number, max?:string, fileAccept?:string, maxLength?:number, minLenght?:number, onEnterPressed?:(value:string)=>void, value?:string, onArrowKeyPressed?:(event:any)=>void, onClick?:()=>void}) {
    const descRef = useRef<HTMLInputElement>();
    const onEnterPressed = (event:any)=>{
        if(event.key == "Enter"){
            if(props.onEnterPressed){
                props.onEnterPressed(event);
            }
            descRef.current?.type=="search" && descRef.current?.blur();
        }
        if(event.key == "ArrowDown" || event.key == "ArrowUp"){
            props.onArrowKeyPressed && props.onArrowKeyPressed(event);
        }
        
    }
    return (
        <div className={"textField "+props.variant+" "+(props.isValid?"":"error")} onClick={props.onClick}>
            
            {
                (props.icon && props.type != "date" )&& <Icon 
                    icon={props.icon} 
                    type={"outlined"}/>
            
            }
            <label className="body-small" 
                htmlFor={props.name}>
                    {props.label}
            </label>
            
            <input  
                ref={descRef}
                id={props.name} 
                name={props.name} 
                type={props.type} 
                placeholder=" " 
                className="body-large" 
                onChange={props.onChange} 
                min={props.min} 
                max={props.max} 
                maxLength={props.maxLength} 
                minLength={props.minLenght} 
                onKeyDown={onEnterPressed} 
                value={props.value}/>
        </div>
    );
}