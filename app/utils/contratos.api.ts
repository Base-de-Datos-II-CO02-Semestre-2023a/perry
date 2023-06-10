import { requestOptionsGET, url } from "./api.config";


export async function getContratosConcluir(request:Request){
    const requestOptions = await requestOptionsGET(request);
    
    let status = 0;
        let req = await fetch(`${url}/contrato/concluir`, requestOptions);
        let response = await req.text();
        let data = JSON.parse(response);
        status = req.status
        return data.contratos;

}