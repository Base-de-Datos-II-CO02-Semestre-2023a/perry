import { LugarOption, LugarRhBusqueda, LugarRhInfo } from "~/types/Lugar";
import { requestOptionsGET, requestOptionsGetClient, url } from "./api.config";
import { EmpleadoEncontrado } from "~/types/Empleado";
import { useNavigate } from "@remix-run/react";

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


export async function getEmpleados(request:Request, id:number){
    const requestOptions = await requestOptionsGET(request);
    
    let status = 0;
        let req = await fetch(`${url}/lugar/empleados/${id}`, requestOptions);
        let response = await req.text();
        let data = JSON.parse(response) as EmpleadoEncontrado[];
        data.forEach(empleado =>{
            empleado.fechaDeIngreso = new Date(empleado.fechaDeIngreso);
        })
        status = req.status
        return data;
}

export async function getContratosConcluir(request:Request, id:string){
    const requestOptions = await requestOptionsGET(request);
    
    let status = 0;
        let req = await fetch(`${url}/contrato/concluir/${id}`, requestOptions);
        let response = await req.text();
        let data = JSON.parse(response);
        status = req.status
        return data.contratos;

}

export async function getContarEmpleadosVacaciones(request:Request, id:string) {
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
    try{
        let request = await fetch(`${url}/empleados/vacaciones/contar/${id}`, requestOptions);
        let response = await request.text();
        let data = JSON.parse(response) as {
            empleados:number
        };
        status = request.status
        return data.empleados;
    } catch (error:any){
        return null;
    }
}

