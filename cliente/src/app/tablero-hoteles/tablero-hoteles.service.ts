import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hotelesCrmURLs } from '../hoteles.urls';
import { Hotel } from '../hoteles.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableroHotelesService {

  constructor(private http: HttpClient) { }

  obtenerHoteles(): Observable<Hotel[]> {
    const urlPeticion = hotelesCrmURLs.urlHoteles;

    return this.http.get<Hotel[]>(urlPeticion);
  }

  filtroPorNombre(palabraDeBusqueda: string): Observable<Hotel[]> {
    const urlPeticion = `${hotelesCrmURLs.urlHoteles}/${palabraDeBusqueda}`;
    return this.http.get<Hotel[]>(urlPeticion);
  }
}
