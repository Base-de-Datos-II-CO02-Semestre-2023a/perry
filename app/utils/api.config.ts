import { createCookieSessionStorage } from "@remix-run/node";
import { getUserSession } from "./sessions.server";
import { Empleado } from "~/types/Empleado";

export const url = "http://localhost:8080"


export async function requestOptionsGET(request:Request){
    const [token, rfc] = await getUserSession(request);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions:RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return requestOptions;
}


export function requestOptionsGetClient(token:string){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`)
    var requestOptions: RequestInit = {
        mode:'cors',
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };
    return requestOptions;
}


export async function postRequestOptions(request: Request, empleado: any) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const [token, rfc] = await getUserSession(request);
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(empleado),
        redirect: 'follow'
    };
    return requestOptions;
}

export async function patchRequestOptions(request: Request, body: any) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const [token, rfc] = await getUserSession(request);
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions: RequestInit = {
        method: 'PATCH',
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: 'follow'
    };
    return requestOptions;
}