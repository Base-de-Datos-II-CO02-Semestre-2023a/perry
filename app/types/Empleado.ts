export type Empleado = {
    id?: number;
    nombre: string;
    telefono: number;
    correo: string;
    codigoPostal: number;
    idCiudad: string;
    calle: string;
    numeroInterno: number;
    numeroExterno: number;
    nss: number;
    rfc: string;
    fechaDeNacimiento: Date;
    fechaDeIngreso?: Date;
    contrato?: number;
    indiceProductividad: number;
    password?:string
};

export type EmpleadoInfo = {
    id?: number;
    nombre: string;
    rfc: string;
    puesto: string;
    nss: number;
    correo: string;
    telefono: number;
    salario: number;
    diasFin?:number;
    direccion: string;
    nombreLugar: string;
    diasInicio?: number;
    indiceProductividad: number;

};

export type EmpleadoEncontrado = {
    id: number;
    nombre: string;
    puesto: string;
    salario: number;
    idLugar: string;
    fechaDeIngreso: Date;
    indiceProductividad: number;
    rfc:string;
}

export type EmpleadoProductivo = {
    id: number;
    nombre: string;
    rfc:string;
    indiceProductividad: number;
}