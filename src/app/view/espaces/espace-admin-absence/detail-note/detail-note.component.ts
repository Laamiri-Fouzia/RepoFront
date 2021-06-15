import { Component, OnInit } from '@angular/core';
import {AnneeUniversitaireService} from "../../../../controller/service/annee-universitaire.service";
import {ModuleSemestreOptionService} from "../../../../controller/service/module-semestre-option.service";
import {FiliereService} from "../../../../controller/service/filiere.service";
import {NoteEtudiantModuleService} from "../../../../controller/service/note-etudiant-module.service";
import {MyOption} from "../../../../controller/model/my-option.model";
import {ModuleSemestreOption} from "../../../../controller/model/module-semestre-option.model";
import {NoteEtudiantModule} from "../../../../controller/model/note-etudiant-module.model";
import {AnneeUniversitaire} from "../../../../controller/model/anneeUniversitaire";
import {EtudiantOption} from "../../../../controller/model/etudiant-option.model";
import {Workbook} from "exceljs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-note',
  templateUrl: './detail-note.component.html',
  styleUrls: ['./detail-note.component.scss']
})
export class DetailNoteComponent implements OnInit {

  input1:number;
  input2='';
  input3:number;
  displaytable: boolean=false;
  input4 ='';
  modules: any[]=new Array();
  cols: any[];
  options: any[]=new Array();
  semestres: any[]=new Array();

  constructor(private router:Router,private annéeUniversitaireService: AnneeUniversitaireService, private moduleSemestreOptionService:ModuleSemestreOptionService, private filiereService:FiliereService, private noteEtudiantModuleService:NoteEtudiantModuleService) {
    //anne ce que l'utilisateur voie et code ce qui est stocke



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
    this.filiereService.getAllOptions();
    this.options.push({label: 'Option :', value: null});
    this.modules.push({label: 'Module  :', value: null});
    console.log(this.years)

    this.annéeUniversitaireService.findAllyears();
  }

  private initCol() {
    this.cols = [
      {field: 'Etudiant', header: 'Etudiant'},
      {field: 'note continue', header: 'note continue'},
      {field: 'note Finale avant Rat', header: 'note Finale avant Rat'},
      {field: 'Note module session normale', header: 'Note module session normale'},
      {field: 'Resultat', header: 'Resultat'},
      {field: 'Action', header: 'Action'}
    ];
  }

  get myOptions(): Array<MyOption> {
    return this.filiereService.myOptions;
  }
  change1() {
    this.moduleSemestreOptionService.anneUniveSelec=this.input1;
    for(let  i = 0; i < this.myOptions.length; i++) {
      this.options.push({label: this.myOptions[i].libelle, value: this.myOptions[i].code});
    }
  }
  change2() {
    this.moduleSemestreOptionService.moduleSemestreOption.myOption.code=this.input2;
    this.moduleSemestreOptionService.findOptionByCode();
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

  get moduleselected(): string {
    return this.noteEtudiantModuleService.moduleselected;
  }

  get moduleSemestreOptions(): Array<ModuleSemestreOption> {
    return this.moduleSemestreOptionService.moduleSemestreOptions;
  }
  get moduleSemestreOption(): ModuleSemestreOption {
    return this.moduleSemestreOptionService.moduleSemestreOption;
  }

  get notesEtudiantModule(): Array<NoteEtudiantModule> {
    return this.noteEtudiantModuleService.notesEtudiantModule;
  }
  get noteEtudiantModule(): NoteEtudiantModule {
    return this.noteEtudiantModuleService.noteEtudiantModule;
  }
  set noteEtudiantModule(value: NoteEtudiantModule) {
    this.noteEtudiantModuleService.noteEtudiantModule=value;
  }

  set editDialog(value: boolean) {
    this.noteEtudiantModuleService.editDialog = value;
  }
  set notesEtudiantModule(value:  Array<NoteEtudiantModule>) {
    this.noteEtudiantModuleService.notesEtudiantModule = value;
  }

  get editDialog(): boolean {
    return this.noteEtudiantModuleService.editDialog;
  }


  get years(): Array<AnneeUniversitaire> {
    return this.annéeUniversitaireService.years;
  }
  gotTo(viewAbsenceEtudiant: string) {
    this.router.navigate([`${viewAbsenceEtudiant}`]);
  }
  serachEtudiant(module:string) {
    this.noteEtudiantModuleService.serachEtudiant(module);
  }

  public edit(note: NoteEtudiantModule) {
    this.noteEtudiantModule = {...note};
    this.editDialog = true;

  }

  clone(not:NoteEtudiantModule){
    let n=new NoteEtudiantModule();
    n.etudiant={...not.etudiant}
    n.moduleSemestreOption={...not.moduleSemestreOption}
    n.noteEtudiantSemestre={...not.noteEtudiantSemestre}
    n.etatValidation={...not.etatValidation}
    n.noteGlobale=not.noteGlobale
    n.noteModuleNormal=not.noteModuleNormal
    n.noteContinue=not.noteContinue
    n.noteFinalApresRat=not.noteFinalApresRat
    n.noteFinalAvRat=not.noteFinalAvRat
    return n;
  }
}
