import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Solde {
  constructor(

    public  soldeAnnuel: number,
     public soldePris: number,
     public soldeRestant: number

  ) { }
}
@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {
  nbj = 0 ;
  soldes !: Solde[];
  constructor(private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getSolde();
    this.nbj = this.soldes[0].soldeRestant ;
  }
  getSolde(){
    this.http.get<any>('http://localhost:3000/user/soldeConges/1').subscribe(response => {
        console.log(response);
        this.soldes = response;
    })

  }

}
