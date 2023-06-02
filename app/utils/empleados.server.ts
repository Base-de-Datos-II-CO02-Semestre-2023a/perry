import { fetch } from "@remix-run/node";
import { getUserSession } from "./sessions.server";
import {requestOptionsGET, url} from "./api.config";
import { badRequest } from "./request.server";
import { useSearchParams } from "@remix-run/react";
export type Empleado = {
    id:number,
    nombre:string,
    telefono:number,
    correo:string,
    codigoPostal:number,
    idCiudad:string,
    calle:string,
    numeroInterno:number,
    numeroExterno:number,
    nss:number,
    rfc:string,
    fechaDeNacimiento:Date,
    fechaDeIngreso:Date,
    contrato:number,
    indiceProductividad:number
}
export async function getUserData(request:Request){
    const [token, rfc] = await getUserSession(request);
    
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

export async function getEmpleadoByRfc(request:Reques, rfc:string) {
    const requestOptions = await requestOptionsGET(request);
    let status = 0;
    try{
        let request = await fetch(`${url}/empleados/${rfc}`, requestOptions);
        let response = await request.text();
        let data = JSON.parse(response) as Empleado;
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
        let data = JSON.parse(response) as Empleado[];
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
        let data = JSON.parse(response) as Empleado[];
        status = request.status
        return data;
    } catch (error:any){
        return null;
    }

}

