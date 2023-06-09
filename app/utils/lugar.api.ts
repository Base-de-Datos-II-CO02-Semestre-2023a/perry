import { LugarOption, LugarRhBusqueda, LugarRhInfo } from "~/types/Lugar";
import { requestOptionsGET, requestOptionsGetClient, url } from "./api.config";

export async function suggestLugar( token:string, query: string){

    const requestOptions = requestOptionsGetClient(token);

    const lugar = fetch(`${url}/lugar/suggest/${query}`, requestOptions).then(response=>{
        return response.text().then(text => {
            return JSON.parse(text) as LugarOption[];
        })
    })

    return await lugar;
}

export async function searchLugarRh(request:Request, query:string){
    const requestOptions = await requestOptionsGET(request);
    const req = await fetch(`${url}/lugar/buscar/rh/${query}`, requestOptions);
    const response = await req.text();
    if (response  === "") return [];
    const lugar = JSON.parse(response) as LugarRhBusqueda[];
    return lugar;
}

export async function searchAllLugaresRh(request:Request){
    const requestOptions = await requestOptionsGET(request);
    const req = await fetch(`${url}/lugar/buscar/rh`, requestOptions);
    const response = await req.text();
    if (response  === "") return [];
    const lugar = JSON.parse(response) as LugarRhBusqueda[];
    return lugar;
}

export async function infoRhLugar(request: Request, id:string){
    const requestOptions = await requestOptionsGET(request);
    const req = await fetch(`${url}/lugar/rh/${id   }`, requestOptions)
    const response = await req.text();
    if (response === "") return null;
    const lugar = JSON.parse(response) as LugarRhInfo;
    return lugar;
}