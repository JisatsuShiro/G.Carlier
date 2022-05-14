import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OpenModalService } from '../_services/actualites.service';
import { actualites } from '../nos-actualites/actualite';

@Component({
  selector: 'app-nos-actualites-detail',
  templateUrl: './nos-actualites-detail.component.html',
  styleUrls: ['./nos-actualites-detail.component.scss'],
})
export class NosActualitesDetailComponent implements OnInit  {
  titre: string;
  texte: string;
  date: string;
  images: string[];
  actuDemandeeDetail: number = 0;

  constructor(public dialogRef: MatDialogRef<OpenModalService>, public openModal: OpenModalService) {
    this.actuDemandeeDetail = this.openModal.actudemandeService;    
    this.titre = openModal.provideTitre(this.actuDemandeeDetail);
    this.texte = openModal.provideTexte(this.actuDemandeeDetail);
    this.date = openModal.provideDate(this.actuDemandeeDetail);
    this.images = openModal.provideImages(this.actuDemandeeDetail)
  }

  ngOnInit(): void {
    this.openModal.emetteurActualite.subscribe((value) => this.actuDemandeeDetail=value);
    this.actuDemandeeDetail = this.openModal.actudemandeService;    
  }

  actionFunction() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}

