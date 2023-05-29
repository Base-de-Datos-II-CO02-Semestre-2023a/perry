import { fetch } from "@remix-run/node";
import { getUserSession } from "./sessions.server";
import {url} from "./api.config";
import { badRequest } from "./request.server";
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
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions:RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

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