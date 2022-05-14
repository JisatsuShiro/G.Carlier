import { Component, OnInit } from '@angular/core';
import { NosActualitesDetailComponent } from '../nos-actualites-detail/nos-actualites-detail.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OpenModalService } from '../_services/actualites.service';

@Component({
  selector: 'app-nos-actualites',
  templateUrl: './nos-actualites.component.html',
  styleUrls: ['./nos-actualites.component.scss'],
})

export class NosActualitesComponent implements OnInit {

  public actuDemandeeComponent: number;
  constructor(public matDialog: MatDialog, public demande: OpenModalService) {}

  openModal(nombre: number) {
    this.actuDemandeeComponent = nombre;
    this.demande.ajouter(this.actuDemandeeComponent);    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "55%";
    dialogConfig.width = "100%";
    const dialogRef = this.matDialog.open(NosActualitesDetailComponent, dialogConfig);    
  }
  ngOnInit(): void {}
}