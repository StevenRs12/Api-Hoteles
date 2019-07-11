import { Component, OnInit } from '@angular/core';
import { TableroHotelesService } from './tablero-hoteles.service';
import { Hotel } from '../hoteles.models';

@Component({
  selector: 'app-tablero-hoteles',
  templateUrl: './tablero-hoteles.component.html',
  styleUrls: ['./tablero-hoteles.component.scss']
})
export class TableroHotelesComponent implements OnInit {

  hoteles: Hotel[] = [];
  isCollapsed: boolean = false;

  constructor(private tableroHotelesService: TableroHotelesService) { }

  ngOnInit() {
    this.listarHoteles();
  }


  listarHoteles() {
    this.tableroHotelesService.obtenerHoteles().subscribe(
      (resultado) => {
        this.hoteles = resultado;
      }
    );
  }

  listarHotelesFiltrados(palabraBusqueda:string) {
    this.tableroHotelesService.filtroPorNombre(palabraBusqueda).subscribe(
      (resultado) => {
        this.hoteles = resultado;
      }
    );
  }

  clickFiltro() {
    this.isCollapsed = !this.isCollapsed;
  }


}
