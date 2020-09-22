import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Universidad } from '../models/universidad';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  readonly rootUrl = 'https://eliteclassvirtual.com/APIEliteClass/'

  constructor(private http : HttpClient) { }

  public getUniversidades(): Observable<Universidad[]>{
    return this.http.get(this.rootUrl + 'universidad/').pipe(
      map(universidades => { 
        console.log(universidades);
        return (<any>universidades).items as Universidad[] 
      })
    );
  }
}
