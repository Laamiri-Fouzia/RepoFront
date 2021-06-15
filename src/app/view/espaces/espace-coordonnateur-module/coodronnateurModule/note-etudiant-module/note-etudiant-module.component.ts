import { Component, OnInit } from '@angular/core';
import {NoteEtudiantModuleService} from "../../../../../controller/service/note-etudiant-module.service";
import {FiliereService} from "../../../../../controller/service/filiere.service";
import {ModuleSemestreOptionService} from "../../../../../controller/service/module-semestre-option.service";
import {NoteEtudiantModule} from "../../../../../controller/model/note-etudiant-module.model";
import {MyOption} from "../../../../../controller/model/my-option.model";
import {ModuleSemestreOption} from "../../../../../controller/model/module-semestre-option.model";
import {AnneeUniversitaireService} from "../../../../../controller/service/annee-universitaire.service";
import {AnneeUniversitaire} from "../../../../../controller/model/anneeUniversitaire";
import {EtudiantOption} from "../../../../../controller/model/etudiant-option.model";
import {Workbook} from "exceljs";
import * as fs from 'file-saver';
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-etudiant-module',
  templateUrl: './note-etudiant-module.component.html',
  styleUrls: ['./note-etudiant-module.component.scss']
})
export class NoteEtudiantModuleComponent implements OnInit {

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
  gotTo(viewEtudiant: string) {
    this.router.navigate([`${viewEtudiant}`]);
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

  serachEtudiant(module:string) {
    this.noteEtudiantModuleService.serachEtudiant(module);
  }

  public edit(note: NoteEtudiantModule) {
    this.noteEtudiantModule = {...note};
    this.editDialog = true;

  }

  //import_export methode
  onFileChange(evt: any) {
    //vider table
    this.notesEtudiantModule=new Array<NoteEtudiantModule>();

    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      //un gestionnaire pour l'evenement abort (qui se declenche lorsque le chargement de donnee est annuler)
      this.noteEtudiantModule=new NoteEtudiantModule();
      const bstr: string = e.target.result;
      const data = <any[]>this.noteEtudiantModuleService.importFromFile(bstr);
      const header: string[] = Object.getOwnPropertyNames(new EtudiantOption());
      const x = data.slice(1);
      console.log('hadi data ')
      console.log(x)
      for (let i = 0; i < x.length; i++) { //i=2
        for (let j = 0; j <= x[i].length; j++) {
          if (j == 0) {
            this.noteEtudiantModule.etudiant.cne= x[i][j];//can not read propertiy of indefined **tayo9ff hnna
          }if (j == 1) {
            this.noteEtudiantModule.etudiant.nom= x[i][j];//can not read propertiy of indefined **tayo9ff hnna
          } else if (j == 2) {
            this.noteEtudiantModule.etudiant.prenom= x[i][j];//can not read propertiy of indefined **tayo9ff hnna
          } else if (j == 3) {
            this.noteEtudiantModule.noteContinue= x[i][j];//can not read propertiy of indefined **tayo9ff hnna
          } else if (j == 4) {
            this.noteEtudiantModule.noteFinalAvRat = x[i][j];
          } else if (j == 5) {
            this.noteEtudiantModule.noteModuleNormal = x[i][j];
          } else if (j == 6) {
            this.noteEtudiantModule.noteGlobale= x[i][j];
          } else if (j == 7) {
            this.noteEtudiantModule.etatValidation.libelle= x[i][j];
          }

        }
        let pc=this.moduleSemestreOption.myOption.coefContinue;
        let pf=this.moduleSemestreOption.myOption.coefFinale;
        let nc=this.noteEtudiantModule.noteContinue;
        let nfAvR=this.noteEtudiantModule.noteFinalAvRat;
        this.noteEtudiantModule.noteModuleNormal=(pc*nc)+(pf*nfAvR);
        this.noteEtudiantModule.noteGlobale=this.noteEtudiantModule.noteModuleNormal;
        this.noteEtudiantModule.moduleSemestreOption.code=this.moduleselected;
        if(this.noteEtudiantModule.noteModuleNormal>=10)
          this.noteEtudiantModule.etatValidation.libelle='Validé';
        else
          this.noteEtudiantModule.etatValidation.libelle='Rattrapage';
        console.log('note etuf')
        this.notesEtudiantModule.push(this.clone(this.noteEtudiantModule));
        console.log(this.notesEtudiantModule)
        this.noteEtudiantModuleService.EditNoteForExcel();
      }

    };
    reader.readAsBinaryString(target.files[0]);

  }

  downloadExcel() {

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('notes_session_normale');
    worksheet.columns = [
      { header: 'Cne', key: 'cne', width: 17 },
      { header: 'Nom', key: 'etudiant', width: 23 },
      { header: 'Prenom', key: 'etudiant1', width: 23},
      { header: 'Note Continue', key: 'noteContinue', width: 20 },
      { header: 'Note Finale', key: 'noteFinaleAvantRat', width: 20 },
      { header: 'Note Module Normale', key: 'noteModuleNormale', width: 25 },
      { header: 'Note Globale', key: 'noteGlobale', width: 20, },
      { header: 'Resultat', key: 'resultat', width: 20 }
    ];
    this.noteEtudiantModuleService.notesEtudiantModule.forEach(e => {

      worksheet.addRow({
            cne: e.etudiant.cne,
            etudiant: e.etudiant.nom,
            etudiant1:e.etudiant.prenom,
            noteContinue: e.noteContinue,
            noteFinaleAvantRat: e.noteFinalAvRat,
            noteModuleNormale:e.noteModuleNormal,
            noteGlobale:e.noteGlobale,
            resultat:e.etatValidation.libelle
          }, 'n');
    });
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Notes_etudiants_'+this.input3+'_'+this.input4+'_'+this.input1+'.xlsx');
    });
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
