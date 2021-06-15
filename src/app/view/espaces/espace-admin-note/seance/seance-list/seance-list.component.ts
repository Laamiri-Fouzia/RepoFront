import { Component, OnInit } from '@angular/core';
import {Seance} from "../../../../../controller/model/seance.model";
import {ModuleSemestreOptionService} from "../../../../../controller/service/module-semestre-option.service";
import {SeanceService} from "../../../../../controller/service/seance.service";

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.scss']
})
export class SeanceListComponent implements OnInit {

  constructor(private seanceService:SeanceService,private moduleSemestreOptionService:ModuleSemestreOptionService) { }

  ngOnInit(): void {
  }
  get createDialog1(): boolean {
    return this.moduleSemestreOptionService.createDialog1;
  }

  set createDialog1(value: boolean) {
    this.moduleSemestreOptionService.createDialog1 = value;
  }

  get editDialog1(): boolean {
    return this.moduleSemestreOptionService.editDialog1;
  }

  set editDialog1(value: boolean) {
    this.moduleSemestreOptionService.editDialog1 = value;
  }

  get viewDialog1(): boolean {
    return this.moduleSemestreOptionService.viewDialog1;
  }

  set viewDialog1(value: boolean) {
    this.moduleSemestreOptionService.viewDialog1 = value;
  }
  get seances(): Array<Seance> {
    return this.seanceService.seances;
  }

  set seances(value: Array<Seance>) {
    this.seanceService.seances = value;
  }

  get seance(): Seance {
    return this.seanceService.seance;
  }

  set seance(value: Seance) {
    this.seanceService.seance = value;
  }
  get createDialog(): boolean {
    return this.seanceService.createDialog;
  }

  set createDialog(value: boolean) {
    this.seanceService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.seanceService.editDialog;
  }

  set editDialog(value: boolean) {
    this.seanceService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.seanceService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.seanceService.viewDialog = value;
  }

  get submitted(): boolean {
    return this.seanceService.submitted;
  }

  set submitted(value: boolean) {
    this.seanceService.submitted = value;
  }
  get submitted1(): boolean {
    return this.moduleSemestreOptionService.submitted1;
  }

  set submitted1(value: boolean) {
    this.moduleSemestreOptionService.submitted1 = value;
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
    this.createDialog1 = false;
    this.submitted1 = false;
  }

  openCreate() {
    this.submitted = false;
    this.createDialog = true;
  }

  openCreate1(seance: Seance) {
    this.createDialog2=true;
    this.seanceService.editSeance(seance);
  }
}
