import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ValidationErrors} from '@angular/forms';


const API_POST_DEMANDE_CONGES = 'http://localhost:3000/conges';

@Injectable({
  providedIn: 'root'
})
export class DemandeCongesService {

  constructor(
    private http: HttpClient
  ) {
  }

  addConges(body: any): Observable<any> {
    return this.http.post(API_POST_DEMANDE_CONGES, body);
  }
}







