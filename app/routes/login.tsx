
import { LinksFunction, LoaderArgs, LoaderFunction, fetch, redirect } from "@remix-run/node";
import { useState } from "react";
import Button from "~/components/Button";
import ErrorDialog from "~/components/ErrorDialog";
import TextField from "~/components/TextField";
import loginStylesUrl from "~/styles/login.css";
export const links:LinksFunction = () => {
    return [{ rel: "stylesheet", href: loginStylesUrl }];
}

import { ActionArgs } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import { getUserSession, login } from "~/utils/sessions.server";
import { badRequest } from "~/utils/request.server";


export const loader: LoaderFunction = async ({ request }:LoaderArgs) => {
    const [token, user, puesto] = await getUserSession(request);
    if (token) {
        return redirect('/');
    }
    return null;
}

export const action = async ({ request }:ActionArgs) => {
    const form = await request.formData();
    const user = form.get('user') as string;
    const password = form.get('password')as string;
    const redirectTo = form.get('redirectTo') as string;
    if(user != '' && password != ''){
        var response = login(user,password,redirectTo);
        return await response;
    }
    return {formError:"Favor de llenar los campos"}
    
}


export default function Login() {
    const [isRfcValid, setIsRfcValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [messageError, setMessageError] = useState('');

    const actionData = useActionData<typeof action>();
    const [searchParams] = useSearchParams();    

    function validateRfc(event : React.ChangeEvent<HTMLInputElement>) {
        let rfc = event.target.value;
        setMessageError('')
        if (rfc.length === 0) {
            setIsRfcValid(false);
            setMessageError('El RFC no puede estar vacío');
        } else if (rfc.length < 9) {
            setIsRfcValid(false);
            setMessageError('El RFC debe tener al menos 12 caracteres');
        } else {
            setIsRfcValid(true);
            setMessageError('');
        }
    }

    function validatePassword(event : React.ChangeEvent<HTMLInputElement>) {
        let password = event.target.value;
        setMessageError('')
        if (password.length === 0) {
            setIsPasswordValid(false);
            setMessageError('La contraseña no puede estar vacía');
        } else if (password.length < 8) {
            setIsPasswordValid(false);
            setMessageError('La contraseña debe tener al menos 8 caracteres');
        } else {
            setIsPasswordValid(true);
            setMessageError('');
        }
    }
    
    return(
        <>
            <h2 className="display-large">Inicio de sesión</h2>
        
            <form method="post">
                <input type="hidden" name="redirectTo" value={searchParams.get('redirectTo') || '/'} readOnly />
                {messageError && <ErrorDialog message={messageError} />}
                {(actionData?.formError && !messageError) && <ErrorDialog message={actionData.formError} />}
                <TextField label="RFC" name="user" type="text" variant={"outlined"} onChange={validateRfc} isValid={isRfcValid}/>
                <TextField label="Contraseña" name="password" type="password" variant="outlined" onChange={validatePassword} isValid={isPasswordValid}/>
                <Button type="submit" variant="filled" label="Iniciar sesión" className="primary" color="primary" disabled={!(isPasswordValid&&isRfcValid)} />
            </form>
        </>
    );
}