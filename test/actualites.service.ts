import { Injectable, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NosActualitesDetailComponent } from '../nos-actualites-detail/nos-actualites-detail.component';
import { actualites } from '../nos-actualites/actualite';
import { Actualites } from '../nos-actualites/actualites-data';
import { NosActualitesComponent } from '../nos-actualites/nos-actualites.component';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  public actudemandeService: number;
  public emetteurActualite: EventEmitter<number>;
  constructor(public dialogRef: MatDialogRef<NosActualitesDetailComponent>) {
    this.emetteurActualite = new EventEmitter();
  }
  private notifier(){
    this.emetteurActualite.emit(this.actudemandeService);
  }

  public ajouter(nombre: number): number {
    this.actudemandeService = nombre;
    if(nombre){
      this.notifier();
    }    
    return nombre;
  }

  actionFunction() {
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  getActualites(): actualites[]{
    return Actualites;
  }

  provideTitre(nombre: number): string {
    return Actualites[nombre].titre;
  }

  provideDate(nombre: number): string {
    return Actualites[nombre].date;
  }

  provideTexte(nombre: number): string {
    return Actualites[nombre].texte;
  }

  provideImages(nombre: number): string[] {
    return Actualites[nombre].images;     
  }
}
