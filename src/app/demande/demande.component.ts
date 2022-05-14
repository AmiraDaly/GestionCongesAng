import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DemandeCongesService} from "../services/demande-conges.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  listConge:any;
  private errorMessage: any;
  constructor(private toastr: ToastrService ,private demandeCongesService : DemandeCongesService) { }

  ngOnInit(): void {
  }

  addConge(dateDepart:any,dateRetour:any,commentaire:any){

    var val ={
      dateDepart:dateDepart.value,
      dateRetour: dateRetour.value,
      motif: commentaire.value
    };
    console.log('fnValider : ',val )
    this.demandeCongesService.addConges(val).subscribe({
      next: data => {
        console.log('succes : ', data)
        this.toastr.success('Une nouvelle demande de conges a été bien créé', 'SUCCESS')
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log('error : ', this.errorMessage)
        this.toastr.error('Une erreur est survenue lors de la création d une  demande de conges  '+this.errorMessage, 'Oops')

      }
    });
  }
}
