import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos:Egreso[] = [
        new Egreso("Arriendo",900),
        new Egreso("Ropa",400)
    ];

    agregarEgreso(egreso:Egreso){
        this.egresos.push(egreso);
    }

    eliminarEgreso(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}