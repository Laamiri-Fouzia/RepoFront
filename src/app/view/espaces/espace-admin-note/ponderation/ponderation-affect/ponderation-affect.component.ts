import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {PonderationService} from "../../../../../controller/service/ponderation.service";
import {any} from "codelyzer/util/function";
import {Filiere} from "../../../../../controller/model/filiere.model";
import {MyOption} from "../../../../../controller/model/my-option.model";

@Component({
  selector: 'app-ponderation-affect',
  templateUrl: './ponderation-affect.component.html',
  styleUrls: ['./ponderation-affect.component.scss']
})
export class PonderationAffectComponent implements OnInit {

  fil='';
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,private ponderationService:PonderationService) { }

  ngOnInit(): void {
    this.ponderationService.findAllFiliere();
  }
  get createDialog(): boolean {
    return this.ponderationService.createDialog;
  }

  set createDialog(value: boolean) {
    this.ponderationService.createDialog = value;
  }
  get editDialog(): boolean {
    return this.ponderationService.editDialog;
  }

  set editDialog(value: boolean) {
    this.ponderationService.editDialog = value;
  }
  get submitted(): boolean {
    return this.ponderationService.submitted;
  }

  set submitted(value: boolean) {
    this.ponderationService.submitted = value;
  }
  get filSelected(): string {
    return this.ponderationService.filSelected;
  }

  set filSelected(value: string) {
    this.ponderationService.filSelected = value;
  }
  get filiere(): Filiere {
    return this.ponderationService.filiere;
  }

  set filiere(value: Filiere) {
    this.ponderationService.filiere = value;
  }
  get myOptions(): Array<MyOption> {
    return this.ponderationService.myOptions;
  }

  set filieres(value: Array<Filiere>) {
    this.ponderationService.filieres = value;
  }

  get filieres(): Array<Filiere> {
    return this.ponderationService.filieres;
  }

  set myOptions(value: Array<MyOption>) {
    this.ponderationService.myOptions = value;
  }
  get myOption(): MyOption {
    return this.ponderationService.myOption;
  }

  set myOption(value: MyOption) {
    this.ponderationService.myOption = value;
  }
  change1(){
    this.filSelected=this.fil;
   /* for(let  i = 0; i < this.filieres.length; i++){
      this.myFilieres.push({label: this.filieres[i].libelle, value: this.filieres[i].code});
    }*/
  }

  chercheOptions() {
    this.ponderationService.chercheOptions();
  }

  public openCreate(myOpt:MyOption) {
    this.myOption =myOpt;
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(filiere: Filiere) {
    this.filiere = {...filiere};
    this.editDialog = true;
  }
}
