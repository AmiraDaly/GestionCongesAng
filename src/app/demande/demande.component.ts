import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  readonly urlApi = "http://localhost:3000/conges";

  listConge:any;
  constructor(private http :HttpClient) { }

  ngOnInit(): void {
  }
  addConge(val:any): Observable<any>{
    return this.http.post(this.urlApi+"/addCongee",val);
       

}

  fnValider(dateDepart:any,dateRetour:any,commentaire:any){
    var val ={
      dateDepart:dateDepart.value,
      dateReoutr: dateRetour.value,
      commentaire: commentaire.value
    };

     
  
  
  }

}
