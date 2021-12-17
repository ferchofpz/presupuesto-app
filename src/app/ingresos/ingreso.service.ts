import { EventEmitter, Injectable } from "@angular/core";
import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingresos:Ingreso[] = [
        new Ingreso("Salario",2100),
        new Ingreso("Venta coche",1500)
    ];

    agregarIngreso(ingreso:Ingreso){
        this.ingresos.push(ingreso);
    }

    eliminarIngreso(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}