import { Component, OnInit } from '@angular/core';
import {ModuleSemestreOption} from "../../../../../controller/model/module-semestre-option.model";
import {ModuleSemestreOptionService} from "../../../../../controller/service/module-semestre-option.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {AnneeUniversitaire} from "../../../../../controller/model/anneeUniversitaire";
import {AnneeUniversitaireService} from "../../../../../controller/service/annee-universitaire.service";
import {SeanceService} from "../../../../../controller/service/seance.service";

@Component({
  selector: 'app-module-semestre-option-list',
  templateUrl: './module-semestre-option-list.component.html',
  styleUrls: ['./module-semestre-option-list.component.scss']
})
export class ModuleSemestreOptionListComponent implements OnInit {


  input1:number;
  input2:number;
  displaytable: boolean=false;
  semestres: any[];
  loading = [false, false, false, false]

  load(index) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }



  constructor(private seanceService:SeanceService,private annéeUniversitaireService: AnneeUniversitaireService, private moduleSemestreOptionService:ModuleSemestreOptionService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.semestres=[
      {semestre: "Semestre", code: null},
      {semestre: "Semestre1", code: 1},
      {semestre:"Semestre2", code:2},
      {semestre: "Semestre3", code: 3},
      {semestre: "Semestre4", code: 4},
      {semestre:"Semestre5", code: 5} ,
      {semestre:"Semestre6", code: 6}
    ]

  }

  ngOnInit(): void {
    this.annéeUniversitaireService.findAllyears();
    this.moduleSemestreOptions=new Array<ModuleSemestreOption>();
    this.displayModules=false;
  }



  /*get semesters(): Array<Semestre> {
    return this.moduleSemestreOptionService.semesters;
  }

  set semesters(value: Array<Semestre>) {
    this.moduleSemestreOptionService.semesters= value;
  }*/


  public openCreate() {
    this.submitted = false;
    this.createDialog = true;
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

  get submitted1(): boolean {
    return this.moduleSemestreOptionService.submitted1;
  }

  set submitted1(value: boolean) {
    this.moduleSemestreOptionService.submitted1 = value;
  }

  get submitted(): boolean {
    return this.moduleSemestreOptionService.submitted;
  }

  set submitted(value: boolean) {
    this.moduleSemestreOptionService.submitted = value;
  }

  get createDialog(): boolean {
    return this.moduleSemestreOptionService.createDialog;
  }

  set createDialog(value: boolean) {
    this.moduleSemestreOptionService.createDialog = value;
  }

  get displayModules(): boolean {
    return this.moduleSemestreOptionService.displayModules;
  }

  set displayModules(value: boolean) {
    this.moduleSemestreOptionService.displayModules = value;
  }


  get moduleSemestreOptions(): Array<ModuleSemestreOption> {
    return this.moduleSemestreOptionService.moduleSemestreOptions;
  }
  get moduleSemestreOption(): ModuleSemestreOption {
    return this.moduleSemestreOptionService.moduleSemestreOption;
  }
  set moduleSemestreOption(value: ModuleSemestreOption) {
    this.moduleSemestreOptionService.moduleSemestreOption = value;
  }

  set moduleSemestreOptions(value: Array<ModuleSemestreOption>) {
    this.moduleSemestreOptionService.moduleSemestreOptions = value;
  }



  get anneUniveSelec(): number {
    return this.moduleSemestreOptionService.anneUniveSelec;
  }
  set anneUniveSelec(value: number) {
    this.moduleSemestreOptionService.anneUniveSelec=value;
  }


  get semestreselec(): number {
    return this.moduleSemestreOptionService.semestreselec;
  }
  set semestreselec(value: number) {
    this.moduleSemestreOptionService.semestreselec=value;
  }

  get years(): Array<AnneeUniversitaire> {
    return this.annéeUniversitaireService.years;
  }

  change1() {
    this.moduleSemestreOptionService.anneUniveSelec=this.input1;
  }
  change2() {
    this.moduleSemestreOptionService.semestreselec=this.input2;
  }
  findByOptionCode() {
    this.moduleSemestreOptionService.findByOptionCode();
    this.displayModules=true;
  }

  public deleteModuleSemestreOption(moduleSemestreOption: ModuleSemestreOption) {

    this.moduleSemestreOption= moduleSemestreOption;
    this.moduleSemestreOptionService.deleteModuleSemestreOption().subscribe(data => {

      this.moduleSemestreOptions = this.moduleSemestreOptions.filter(val => val.code !== this.moduleSemestreOption.code);
      this.moduleSemestreOption = new ModuleSemestreOption();
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'module est supprimé',
        life: 2000
      });
    });
    /*this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer ' + moduleSemestreOption.code + '?',
      header: 'Attention',
      icon: 'pi pi-exclamation-triangle',
      accept: () =>{
        this.moduleSemestreOptionService.deleteModuleSemestreOption().subscribe(data => {
          this.moduleSemestreOptions = this.moduleSemestreOptions.filter(val => val.code !== this.moduleSemestreOption.code);
          this.moduleSemestreOption = new ModuleSemestreOption();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'module est supprimé',
            life: 2000
          });
        });
      }
    });*/
  }

  /*detailModuleSemestreOption(moduleSemestreOption: ModuleSemestreOption) {
     this.seanceService.detailModuleSemestreOption(moduleSemestreOption);
    }*/

  openCreate1(moduleSemestreOption: ModuleSemestreOption) {
  this.createDialog1=true;
  this.seanceService.detailModuleSemestreOption(moduleSemestreOption);
}
}