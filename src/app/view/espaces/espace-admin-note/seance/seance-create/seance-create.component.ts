import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../../../controller/service/seance.service";
import {Time} from "@angular/common";

@Component({
  selector: 'app-seance-create',
  templateUrl: './seance-create.component.html',
  styleUrls: ['./seance-create.component.scss']
})
export class SeanceCreateComponent implements OnInit {

  input1;
  input2;
  input3;
  input4;

  constructor(private seanceService:SeanceService) { }

  ngOnInit(): void {
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

  hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  saveSeance(input1:string, input2:string, input3:string,input4:Date) {
    this.seanceService.saveSeance(input1,input2,input3,input4);
  }
}
