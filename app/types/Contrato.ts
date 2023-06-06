export type Contrato = {
    id?: number,
    idEmpleado: number,
    idLugar:number,
    fechaInicio:Date,
    fechaFin?: Date,
    puesto:string,
    salario:number,
    diasVacaciones:number,
    horasDiarias:number,
}