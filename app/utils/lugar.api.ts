import { LugarOption } from "~/types/Lugar";
import { requestOptionsGetClient, url } from "./api.config";

export async function suggestLugar( token:string, query: string){

    const requestOptions = requestOptionsGetClient(token);

    const ciudades = fetch(`${url}/lugar/buscar/${query}`, requestOptions).then(response=>{
        return response.text().then(text => {
            return JSON.parse(text) as LugarOption[];
        })
    })

    return await ciudades;
}