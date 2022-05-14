import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalRefComponent } from '../details-reference/details-reference.component';
import { OpenModalService } from '../_services/actualites.service';
import { ReferencesServicesService } from '../_services/references-services.service';

@Component({
  selector: 'app-nos-references',
  templateUrl: './nos-references.component.html',
  styleUrls: ['./nos-references.component.scss']
})


export class NosReferencesComponent implements OnInit {

  public referenceDemandeeComponent: number;
  constructor(public matDialog: MatDialog,  public demande: ReferencesServicesService) { }

  openModal(nombre: number) {
    this.referenceDemandeeComponent = nombre;
    this.demande.ajouter(this.referenceDemandeeComponent);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "55%";
    dialogConfig.width = "100%";

    const modalDialog = this.matDialog.open(ModalRefComponent, dialogConfig);
  }

  ngOnInit(): void { }
}
