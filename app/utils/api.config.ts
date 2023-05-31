import { getUserSession } from "./sessions.server";

export const url = "http:/localhost:8080"
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
