import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = 'ing';
  descripcion:string;
  valor:number;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento:any){
    this.tipo = evento.target.value;    
  }

  agregarValor(){
    // console.log(this.descripcion,this.valor);
    if(this.tipo === 'ing')
      this.ingresoService.agregarIngreso(new Ingreso(this.descripcion,this.valor));
    else
      this.egresoService.agregarEgreso(new Egreso(this.descripcion,this.valor));
  }
}
