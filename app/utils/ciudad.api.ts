import { Ciudad } from "~/types/Ciudad";
import { requestOptionsGetClient, url } from "./api.config";

export async function suggestCiudad( token:string, query: string){

    const requestOptions = requestOptionsGetClient(token);

    const ciudades = fetch(`${url}/ciudad/buscar/${query}`, requestOptions).then(response=>{
        return response.text().then(text => {
            return JSON.parse(text) as Ciudad[]
        })
    })

    return await ciudades;
}