import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../hoteles.models';

@Component({
  selector: 'app-tarjeta-hotel',
  templateUrl: './tarjeta-hotel.component.html',
  styleUrls: ['./tarjeta-hotel.component.scss']
})
export class TarjetaHotelComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

}
