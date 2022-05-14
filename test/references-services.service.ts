import { EventEmitter, Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalRefComponent } from '../details-reference/details-reference.component';
import { references } from '../nos-references/references';
import { References } from '../nos-references/references-data';

@Injectable({
  providedIn: 'root'
})
export class ReferencesServicesService {
  public referencedemandeService: number;
  public emetteurReference: EventEmitter<number>;
  constructor(public dialogRef: MatDialogRef<ModalRefComponent>) {
    this.emetteurReference = new EventEmitter();
  }

  private notifier(){
    this.emetteurReference.emit(this.referencedemandeService);
    console.log(this.referencedemandeService + " dans le service.notifier");
  }

  public ajouter(nombre: number): number {
    this.referencedemandeService = nombre;
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

  getReferences(): references[]{
    return References;
  }

  provideTitre(nombre: number): string {
    return References[nombre].titre;
  }

  provideTexte(nombre: number): string {
    return References[nombre].texte;
  }

  provideImages(nombre: number): string[] {
    return References[nombre].images;     
  }
}
