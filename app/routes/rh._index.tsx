import ExtendedFAB from "~/components/ExtendedFAB";

export const handle ={
    title: () => "Inicio"
}
export default function Index(){
    return (
        <>
        <div className="actionsBar">
        <ExtendedFAB icon="add" label="Crear objetivo" variant="primary" onClick={()=>{}}/>
        <ExtendedFAB icon="add" label="Registrar falta" variant="primary" onClick={()=>{}}/>
        <ExtendedFAB icon="add" label="Nuevo empleado" variant="tertiary" onClick={()=>{}}/>
        <ExtendedFAB icon="sync_alt" label="Transferir empleado" variant="primary" onClick={()=>{}}/>
        <ExtendedFAB icon="edit" label="Modificar contrato" variant="primary" onClick={()=>{}}/>
        </div>
        
        </>
    );
}