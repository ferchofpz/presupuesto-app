import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent{

  egresos:Egreso[];
  @Input() ingresoTotal:number;

  constructor(private egresoService: EgresoService) {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresoService.eliminarEgreso(egreso);
  }

}
