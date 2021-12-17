import { Component, OnInit } from '@angular/core';
import { Egreso } from './egresos/egreso.model';
import { EgresoService } from './egresos/egreso.service';
import { Ingreso } from './ingresos/ingreso.model';
import { IngresoService } from './ingresos/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  ingresos:Ingreso[];
  egresos:Egreso[];
  sumaIngresos:number;
  sumaEgresos:number;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService){
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  } 

  getIngresoTotal(){
    let ingresoTotal = 0;
    this.ingresos.forEach(
      ingreso => {
        ingresoTotal += ingreso.valor;
      }
    );
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal = 0;
    this.egresos.forEach(
      egreso => {
        egresoTotal += egreso.valor;
      }
    );
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
}
