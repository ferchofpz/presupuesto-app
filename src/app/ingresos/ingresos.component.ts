import { Component, OnInit, } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent{
  ingresos:Ingreso[];

  constructor(private ingresoService:IngresoService) {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso){
    this.ingresoService.eliminarIngreso(ingreso);
  }
}
