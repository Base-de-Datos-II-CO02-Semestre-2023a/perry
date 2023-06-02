import { useSubmit } from "@remix-run/react";
import Button from "./Button";
import InputMenu from "./InputMenu";
import { Option } from "./InputMenu";
import { LegacyRef, useRef } from "react";

export default function SearchBar(props:{label:string, collapsed?:boolean, searchSuggestFunction:(value:string)=>Option[], maxLenght?:number}){
    
    const btnRef = useRef<HTMLFormElement>()
    const submit = useSubmit();
    return(
        <form name="search" method="get" className="searchBar" onChange={(e)=>{submit(e.currentTarget)}} ref={btnRef}>
            <InputMenu 
                label={props.label} 
                name={"searchValue"} 
                variant={"outlined"} 
                suggestFunction={props.searchSuggestFunction}
                maxLenght={props.maxLenght}
                onEnterPressed={()=>btnRef.current?.submit()}
                onOptionClicked={()=>btnRef.current?.submit()}
            />
            {
                props.collapsed ? <Button type="submit" 
                    
                    variant="filled" 
                    icon="search" 
                    className="primary" 
                />
                :<Button 
                    
                    label={"Buscar"} 
                    type={"submit"} 
                    variant={"filled"} 
                    className="primary" 
                    icon="search"
                />
            }
        </form> 
        
        
    );

}