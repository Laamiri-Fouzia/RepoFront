import { Injectable } from '@angular/core';
import {MyOption} from "../model/my-option.model";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {NoteEtudiantSemestre} from "../model/note-etudiant-semestre.model";
import {Filiere} from "../model/filiere.model";
import {NoteEtudiantModule} from "../model/note-etudiant-module.model";
import {Etudiant} from "../model/etudiant.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NoteEtudiantSemestreService {

  constructor(private http:HttpClient,private messageService: MessageService,private router:Router) { }
  private _myOptions:Array<MyOption>;
  private _myNotesSemestre:Array<NoteEtudiantSemestre>;
  private _urlOption='ispits-project/option';
  private _urlNoteEtudiantSemestre='ispits-project/note-etudiant-semestre';
  private _urlBase='http://localhost:8036/';
  private _urlFiliere='ispits-project/filliere';
  private _urlNoteEtudModule: string='ispits-project/note-etudiant-modul';
  private _filierSelct:string;
  private _semestreSelct:number;
  private _etudiant:Etudiant;
  private _anneeSelect:String;
  private _filieres:Array<Filiere>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _noteSemestre:NoteEtudiantSemestre;
  private _notesEtudiantModules1:Array<NoteEtudiantModule>;
  private _notesEtudiantModules:Array<NoteEtudiantModule>;
  private _notesEtudiantModules2:Array<NoteEtudiantModule>;

  private _cneEtudiant:string;

    get cneEtudiant(): string {
        return this._cneEtudiant;
    }

    set cneEtudiant(value: string) {
        this._cneEtudiant = value;
    }

    get anneeSelect(): String {
        return this._anneeSelect;
    }

    get etudiant(): Etudiant {
        if(this._etudiant==null){
            this._etudiant=new Etudiant();
        }
        return this._etudiant;
    }

    set etudiant(value: Etudiant) {
        this._etudiant = value;
    }

    set anneeSelect(value: String) {
        this._anneeSelect = value;
    }

    get semestreSelct(): number {
        return this._semestreSelct;
    }

    set semestreSelct(value: number) {
        this._semestreSelct = value;
    }


  get notesEtudiantModules1(): Array<NoteEtudiantModule> {
      if(this._notesEtudiantModules1==null){
          this._notesEtudiantModules1=new Array<NoteEtudiantModule>();
      }
        return this._notesEtudiantModules1;
    }

    set notesEtudiantModules1(value: Array<NoteEtudiantModule>) {
        this._notesEtudiantModules1 = value;
    }
    get notesEtudiantModules(): Array<NoteEtudiantModule> {
      if(this._notesEtudiantModules==null){
          this._notesEtudiantModules=new Array<NoteEtudiantModule>();
      }
        return this._notesEtudiantModules;
    }

    set notesEtudiantModules(value: Array<NoteEtudiantModule>) {
        this._notesEtudiantModules = value;
    }
    get notesEtudiantModules2(): Array<NoteEtudiantModule> {
      if(this._notesEtudiantModules2==null){
          this._notesEtudiantModules2=new Array<NoteEtudiantModule>();
      }
        return this._notesEtudiantModules2;
    }

    set notesEtudiantModules2(value: Array<NoteEtudiantModule>) {
        this._notesEtudiantModules2 = value;
    }

    get noteSemestre(): NoteEtudiantSemestre {
        if(this._noteSemestre==null){
            this._noteSemestre=new NoteEtudiantSemestre();
        }
        return this._noteSemestre;
    }

    set noteSemestre(value: NoteEtudiantSemestre) {
        this._noteSemestre = value;
    }

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    get editDialog(): boolean {
        return this._editDialog;
    }

    set editDialog(value: boolean) {
        this._editDialog = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }


  get filieres(): Array<Filiere> {
        if(this._filieres==null){
            this._filieres=new Array<Filiere>();
        }
    return this._filieres;
  }

  set filieres(value: Array<Filiere>) {
    this._filieres = value;
  }

  get filierSelct(): string {
    return this._filierSelct;
  }

  set filierSelct(value: string) {
    this._filierSelct = value;
  }

  get myNotesSemestre(): Array<NoteEtudiantSemestre> {
    if(this._myNotesSemestre==null){
      this._myNotesSemestre=new Array<NoteEtudiantSemestre>();
    }
    return this._myNotesSemestre;
  }

  set myNotesSemestre(value: Array<NoteEtudiantSemestre>) {
    this._myNotesSemestre = value;
  }
  get myOptions(): Array<MyOption> {
    if(this._myOptions==null){
      this._myOptions=new Array<MyOption>();
    }
    return this._myOptions;
  }

  set myOptions(value: Array<MyOption>) {
    this._myOptions = value;
  }
    chercheOptions(){
        this.http.get<Array<MyOption>>(this._urlBase+this._urlOption+'/filiere/code/'+this.filierSelct).subscribe(
            data=>{
                console.log(data);
                this.myOptions=data;
            },error => {
                alert('ha fin dkhalet');
            }
        );


    }
  /*findAllOption() {
    this.http.get<Array<MyOption>>(this._urlBase+this._urlOption +'/').subscribe(
        data => {
          console.log(data);
          this.myOptions=data;
        },error => {
          console.log(error);
        });
  }*/


  serachEtudiant(input1: string,input2: string, input3: number) {
    this.http.get<Array<NoteEtudiantSemestre>>(this._urlBase+this._urlNoteEtudiantSemestre+'/semestre/codeSemestre/'+input3+'/option/codeOption/'+input1+'/annee-universitaire/libelle/'+input2).subscribe(
        data=>{
            if(data==null)
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error !',
                    detail: 'Le PV des etudiants pour l\'option "'+input1+'" n\'est pas disponible veuillez entrer toutes les notes des modules pour toutes les étudiants!'
                });
            else{
                console.log(data);
                this.myNotesSemestre=data;
            }
        },error=>{
          alert('error');
        }
    );
  }
  findAllFiliere() {
    this.http.get<Array<Filiere>>(this._urlBase+this._urlFiliere+'/').subscribe(
        data=>{
          console.log(data+'sana');
          this.filieres=data;
        },error=>{
          alert('ha fin dkhalet');
        }
    );
  }

    detailSemestre(noteSemestres: NoteEtudiantSemestre) {
        this.http.get<Array<NoteEtudiantModule>>(this._urlBase+this._urlNoteEtudModule+'/Etudiant/cne/'+noteSemestres.etudiant.cne+'/moduleSemestreOption/semestre/code/'+this.semestreSelct).subscribe(
            data=>{
                this.notesEtudiantModules=data;
                console.log(data);
                console.log('hadi data');
                console.log(data[0].moduleSemestreOption.anneeUniversitaire);
                this.notesEtudiantModules1=null;
                this.notesEtudiantModules2=null;
                for(let i=0 ; i<this.notesEtudiantModules.length ; i++){

                    console.log(this.notesEtudiantModules[i].moduleSemestreOption.anneeUniversitaire)
                    if(this.notesEtudiantModules[i].moduleSemestreOption.semestre.code==this.semestreSelct && this.notesEtudiantModules[i].moduleSemestreOption.anneeUniversitaire.libelle==this.anneeSelect){
                        this.notesEtudiantModules1.push(this.notesEtudiantModules[i]);
                    }else if(this.notesEtudiantModules[i].moduleSemestreOption.anneeUniversitaire.libelle!=this._anneeSelect){
                        this.notesEtudiantModules2.push(this.notesEtudiantModules[i]);
                    }
                }
                console.log(this.notesEtudiantModules1);
                console.log(this.notesEtudiantModules2);
                console.log(data);
            },error => {
                alert('error')
            }
        );
    }

    gotToPage(viewNoteSemestreOne: string) {
        this.router.navigate([`${viewNoteSemestreOne}`]);
    }

    afficherPVPouE(input1: string, input2: number) {
        this.http.get<Array<NoteEtudiantModule>>(this._urlBase+this._urlNoteEtudModule+'/Etudiant/cne/'+input1+'/moduleSemestreOption/semestre/code/'+input2).subscribe(
            data=>{
                this.notesEtudiantModules=data;
                console.log(data);
                if(this.notesEtudiantModules[0].noteEtudiantSemestre.noteSemestre===0){
                    this.gotToPage('view/erreurNote');
                }else{
                    this.gotToPage('view/releve');
                }
                /*for(let i=0 ; i<this.notesEtudiantModules.length ; i++){
                    for(let j=0 ; j<this.notesEtudiantModules.length ; j++){
                        if(this.notesEtudiantModules[j].moduleSemestreOption.myModule.code==this.notesEtudiantModules[i].moduleSemestreOption.myModule.code && this.notesEtudiantModules[j].moduleSemestreOption.anneeUniversitaire.anneeOne<this.notesEtudiantModules[i].moduleSemestreOption.anneeUniversitaire.anneeOne){
                            this.notesEtudiantModules1.push(this.notesEtudiantModules[j]);
                        }
                    }


                }
                for(let i=0 ; i<this.notesEtudiantModules1.length ; i++){
            this.notesEtudiantModules.splice(1,i);
                }

                console.log(this.notesEtudiantModules1);
                console.log(this.notesEtudiantModules2);
                console.log(data);*/
            },error => {
            }
        );

    }
    afficherPVPourA(input1: string, input2: number) {
        this.http.get<Array<NoteEtudiantModule>>(this._urlBase+this._urlNoteEtudModule+'/Etudiant/cne/'+input1+'/moduleSemestreOption/semestre/code/'+input2).subscribe(
            data=>{
                this.notesEtudiantModules=data;
                console.log(data);
                if(this.notesEtudiantModules[0].noteEtudiantSemestre.noteSemestre===0){
                    this.gotToPage('view/erreurNote');
                }else{
                    this.gotToPage('view/note-semestre-one');
                }
                /*for(let i=0 ; i<this.notesEtudiantModules.length ; i++){
                    for(let j=0 ; j<this.notesEtudiantModules.length ; j++){
                        if(this.notesEtudiantModules[j].moduleSemestreOption.myModule.code==this.notesEtudiantModules[i].moduleSemestreOption.myModule.code && this.notesEtudiantModules[j].moduleSemestreOption.anneeUniversitaire.anneeOne<this.notesEtudiantModules[i].moduleSemestreOption.anneeUniversitaire.anneeOne){
                            this.notesEtudiantModules1.push(this.notesEtudiantModules[j]);
                        }
                    }


                }
                for(let i=0 ; i<this.notesEtudiantModules1.length ; i++){
            this.notesEtudiantModules.splice(1,i);
                }

                console.log(this.notesEtudiantModules1);
                console.log(this.notesEtudiantModules2);
                console.log(data);*/
            },error => {
            }
        );

    }
}
