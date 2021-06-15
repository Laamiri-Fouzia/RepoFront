import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../../../controller/service/seance.service";
import {Seance} from "../../../../../controller/model/seance.model";

@Component({
  selector: 'app-seance-edit',
  templateUrl: './seance-edit.component.html',
  styleUrls: ['./seance-edit.component.scss']
})
export class SeanceEditComponent implements OnInit {

  constructor(private seanceService:SeanceService) { }

  ngOnInit(): void {
  }

  get seanceEdit(): Seance {
    return this.seanceService.seanceEdit;
  }

  set seanceEdit(value: Seance) {
    this.seanceService.seanceEdit = value;
  }
  get createDialog2(): boolean {
    return this.seanceService.createDialog2;
  }

  set createDialog2(value: boolean) {
    this.seanceService.createDialog2 = value;
  }

  get editDialog2(): boolean {
    return this.seanceService.editDialog2;
  }

  set editDialog2(value: boolean) {
    this.seanceService.editDialog2 = value;
  }

  get viewDialog2(): boolean {
    return this.seanceService.viewDialog2;
  }

  set viewDialog2(value: boolean) {
    this.seanceService.viewDialog2 = value;
  }

  get submitted2(): boolean {
    return this.seanceService.submitted2;
  }

  set submitted2(value: boolean) {
    this.seanceService.submitted2 = value;
  }

  hideCreateDialog() {
    this.createDialog2 = false;
    this.submitted2 = false;
  }

  seanceEDIT(date:Date,libelle:string,heureDebut:string,heureFin:string) {
    console.log(date);
    console.log(libelle);
    console.log(heureDebut);
    console.log(heureDebut);
    this.seanceService.seanceEDIT(date,libelle,heureDebut,heureFin);
  }
  get dateSea(): Date {
    return this.seanceService.dateSea;
  }

  set dateSea(value: Date) {
    this.seanceService.dateSea = value;
  }
}
