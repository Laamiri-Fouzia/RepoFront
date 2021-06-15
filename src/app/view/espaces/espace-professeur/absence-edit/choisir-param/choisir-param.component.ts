import { Component, OnInit } from '@angular/core';
import {AbsenceService} from "../../../../../controller/service/absence.service";
import {AnneeUniversitaire} from "../../../../../controller/model/anneeUniversitaire";
import {AnneeUniversitaireService} from "../../../../../controller/service/annee-universitaire.service";
import {MyOption} from "../../../../../controller/model/my-option.model";
import {ModuleSemestreOptionService} from "../../../../../controller/service/module-semestre-option.service";
import {FiliereService} from "../../../../../controller/service/filiere.service";
import {NoteEtudiantModuleService} from "../../../../../controller/service/note-etudiant-module.service";
import {ModuleSemestreOption} from "../../../../../controller/model/module-semestre-option.model";
import {Seance} from "../../../../../controller/model/seance.model";
import {SeanceService} from "../../../../../controller/service/seance.service";
import {InscriptionEtudiantService} from "../../../../../controller/service/inscription-etudiant.service";
import {InscriptionEtudiantModule} from "../../../../../controller/model/inscription-etudiant-module.model";

@Component({
  selector: 'app-choisir-param',
  templateUrl: './choisir-param.component.html',
  styleUrls: ['./choisir-param.component.scss']
})
export class ChoisirParamComponent implements OnInit {



  input1:number;
  input2='';
  input3:number;
  displaytable: boolean=false;
  input4 ='';
  modules: any[]=new Array();
  cols: any[];
  options: any[]=new Array();
  semestres: any[]=new Array();

  input5 ='';

  constructor(private inscriptionEtudiantService:InscriptionEtudiantService,private absenceService:AbsenceService,private seanceService:SeanceService,private annéeUniversitaireService: AnneeUniversitaireService, private moduleSemestreOptionService:ModuleSemestreOptionService, private filiereService:FiliereService, private noteEtudiantModuleService:NoteEtudiantModuleService) {
    this.semestres=[
      {label: "Semestre :", value: null},
      {label: "Semestre 1", value: 1},
      {label: "Semestre 2", value: 2},
      {label:  "Semestre 3",value: 3},
      {label:  "Semestre 4",value: 4},
      {label: "Semestre 5", value: 5},
      {label: "Semestre 6", value: 6}
    ];
  }

  ngOnInit(): void {
    this.annéeUniversitaireService.findAllyears();
    this.filiereService.getAllOptions();
    this.options.push({label: 'Option :', value: null});
    this.modules.push({label: 'Module  :', value: null});
  }

  //getters and seters
  get editDialog(): boolean {
    return this.absenceService.editDialog;
  }
  get moduleSemestreOptions(): Array<ModuleSemestreOption> {
    return this.moduleSemestreOptionService.moduleSemestreOptions;
  }

  set editDialog(value: boolean) {
    this.absenceService.editDialog = value;
  }
  get years(): Array<AnneeUniversitaire> {
    return this.annéeUniversitaireService.years;
  }
  get myOptions(): Array<MyOption> {
    return this.filiereService.myOptions;
  }

  get seances(): Array<Seance> {
    return this.seanceService.seances;
  }

  get inscriptionEtudiants(): Array<InscriptionEtudiantModule> {
    return this.inscriptionEtudiantService.inscriptionEtudiants;
  }

  change1() {
    this.moduleSemestreOptionService.anneUniveSelec=this.input1;
    for(let  i = 0; i < this.myOptions.length; i++) {
      this.options.push({label: this.myOptions[i].libelle, value: this.myOptions[i].code});
    }
  }
  change2() {
    this.moduleSemestreOptionService.moduleSemestreOption.myOption.code=this.input2;
  }
  change3() {
    this.moduleSemestreOptionService.semestreselec=this.input3;
    this.moduleSemestreOptionService.findByOptionCode();

  }

  change4() {
    if(this.modules.length<=this.moduleSemestreOptions.length){
      for(let  i = 0; i < this.moduleSemestreOptions.length; i++) {
        this.modules.push({label: this.moduleSemestreOptions[i].myModule.libelle, value: this.moduleSemestreOptions[i].code});
      }
    }
  }

  get seanceSelected(): string {
    return this.absenceService.seanceSelected;
    }

  set seanceSelected(value: string) {
    this.absenceService.seanceSelected = value;
  }

  hideEditDialog() {
    this.editDialog=false;
  }

  chercherEtudiant() {
      this.inscriptionEtudiantService.chercherEtudiant(this.input4,this.seanceSelected);
      this.hideEditDialog();
       this.displayTable=true;
  }
  get displayTable(): boolean {
    return this.absenceService.displayTable;
  }

  set displayTable(value: boolean) {
    this.absenceService.displayTable = value;
  }
  change5() {
    this.seanceService.serachSeances(this.input4);
  }


}
