import { fetch } from "@remix-run/node";
import { getUserSession } from "./sessions.server";
import {postRequestOptions, requestOptionsGET, url} from "./api.config";
import { badRequest } from "./request.server";
import { useSearchParams } from "@remix-run/react";
import { Empleado, EmpleadoEncontrado, EmpleadoInfo, EmpleadoProductivo } from "../types/Empleado";
import { Contrato } from "~/types/Contrato";
export async function getUserData(request:Request){
 
   const requestOptions = await requestOptionsGET(request);

    var status = 0;
    var data = null;
    try {
        let request = await fetch(`${url}/empleados/userdata`, requestOptions);
        let response = await request.text();
        data = JSON.parse(response) as Empleado;
        status=request.status
    } catch (error:any) {
        return badRequest({
            status:status,
            error:error
        });
    }
    
    return data;
}

export async function getEmpleado(request:Request, id:string) {
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
    try{
        let request = await fetch(`${url}/empleados/${id}`, requestOptions);
        let response = await request.text();
        let data = JSON.parse(response) as EmpleadoInfo;
        status = request.status
        return data;
    } catch (error:any){
        return null;
    }
}

export async function getContarEmpleadosVacaciones(request:Request) {
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
    try{
        let request = await fetch(`${url}/empleados/vacaciones/contar`, requestOptions);
        let response = await request.text();
        let data = JSON.parse(response) as {
            empleados:number
        };
        status = request.status
        return data;
    } catch (error:any){
        return null;
    }
}


export async function getEmpleadosMasProductivos(request:Request){
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
    try{
        let request = await fetch(`${url}/empleados/productivos`, requestOptions);
        let response = await request.text();
        let data = JSON.parse(response) as EmpleadoProductivo[];
        status = request.status
        return data;
    } catch (error:any){
        return null;
    }

}

export async function getEmpleadosMenosProductivos(request:Request){
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
    try{
        let request = await fetch(`${url}/empleados/inproductivos`, requestOptions);
        let response = await request.text();
        let data = JSON.parse(response) as EmpleadoProductivo[];
        status = request.status
        return data;
    } catch (error:any){
        return null;
    }

}

export async function getEmpleados(request:Request){
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
        let req = await fetch(`${url}/empleados`, requestOptions);
        let response = await req.text();
        let data = JSON.parse(response) as EmpleadoEncontrado[];
        data.forEach(empleado =>{
            empleado.fechaDeIngreso = new Date(empleado.fechaDeIngreso);
        })
        status = req.status
        return data;
}
    
export async function buscarEmpleadosPorRFC(request:Request, id:string) {
    let status = 0;
    const requestOptions = await requestOptionsGET(request);
    
        let req = await fetch(`${url}/empleados/buscar/${id}`, requestOptions);
        let response = await req.text();
        let data = JSON.parse(response) as EmpleadoEncontrado[];
        status = req.status
        data.forEach(empleado =>{
            empleado.fechaDeIngreso = new Date(empleado.fechaDeIngreso);
        })
        return data;
    
}

export async function registrarEmpleado(request:Request, empleado:Empleado){
    let status = 0;
    var requestOptions: RequestInit = await postRequestOptions(request, empleado);
    try {
        let req = await fetch(`${url}/auth/register`, requestOptions);
        let response = await req.text();
        let data = JSON.parse(response);
        status = req.status
        if (status == 200){
            return {
                data,
                status
            };
        }
        else{
            return {
                title: data.title,
                status: data.status,
                error: data.detail
            };
        }
    } catch (error:any) {
        return {
            title: "Error Interno",
            status: 500,
            error: error
        };
    }
}



/*
{
    "type": "about:blank",
    "title": "Bad Request",
    "status": 400,
    "detail": "nss ya registrado",
    "instance": "/auth/register"
}
*/



export async function nuevoContrato(request:Request, contrato:Contrato){
    let status = 0;
    var requestOptions: RequestInit = await postRequestOptions(request, contrato);
    try {
        let req = await fetch(`${url}/contrato`, requestOptions);
        let response = await req.text();
        let data = JSON.parse(response);
        status = req.status
        if (status == 200){
            return {
                data,
                status
            };
        } else {
            return {
                title: data.title,
                status: data.status,
                error: data.detail
            };
        }
    } catch (error:any) {
        return {
            title: "Error Interno",
            status: 500,
            error: error
        };
    }
}

export async function getHistorialProductividad(request:Request, id:string){
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
    try{
        let request = await fetch(`${url}/empleados/productividad/${id}`, requestOptions);
        let response = await request.text();
        let data = JSON.parse(response) as ProductividadMes[];
        status = request.status
        return data;
    } catch (error:any){
        return null;
    }
}