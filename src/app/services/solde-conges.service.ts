import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ValidationErrors} from '@angular/forms';
import {TokenStorageService} from "./token-storage.service";


const API_POST_SOLDE_CONGES = 'http://localhost:3000/user/soldeConges/';

@Injectable({
  providedIn: 'root'
})
export class SoldeCongesService {

  constructor(
    private http: HttpClient,
    private storageService: TokenStorageService
  ) {
  }

  getSoldeConges(): Observable<any> {
    const userId = this.storageService.getUser().id;
    return this.http.get(API_POST_SOLDE_CONGES+userId);
  }
}







