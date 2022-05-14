import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SoldeCongesService} from "../services/solde-conges.service";
import {ToastrService} from "ngx-toastr";
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
  annuel = 0 ;
  pris= 0 ;
  reste = 0 ;
  private errorMessage: any;
  constructor(private toastr: ToastrService,
    private http: HttpClient, private soldeCongesService : SoldeCongesService
  ) { }

  ngOnInit(): void {
    this.getSolde();
  }
  getSolde() {
    this.soldeCongesService.getSoldeConges().subscribe({
      next: data => {
        console.log('succes : ', data)
        this.annuel = data.soldeAnnuel;
        this.pris = data.soldePris;
        this.reste = data.soldeRestant;
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log('error : ', this.errorMessage)
        this.toastr.error('Une erreur est survenue lors de la consultation de votre solde de conges  ' + this.errorMessage, 'Oops')

      }
    });
  }

}
