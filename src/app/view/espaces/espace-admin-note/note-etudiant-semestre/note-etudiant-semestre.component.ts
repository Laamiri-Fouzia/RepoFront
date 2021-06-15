import { Component, OnInit } from '@angular/core';
import {NoteEtudiantSemestreService} from "../../../../controller/service/note-etudiant-semestre.service";
import {MyOption} from "../../../../controller/model/my-option.model";
import {NoteEtudiantSemestre} from "../../../../controller/model/note-etudiant-semestre.model";
import {Filiere} from "../../../../controller/model/filiere.model";
import {AnneeUniversitaireService} from "../../../../controller/service/annee-universitaire.service";
import {AnneeUniversitaire} from "../../../../controller/model/anneeUniversitaire";
import {NoteEtudiantModule} from "../../../../controller/model/note-etudiant-module.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-etudiant-semestre',
  templateUrl: './note-etudiant-semestre.component.html',
  styleUrls: ['./note-etudiant-semestre.component.scss']
})
export class NoteEtudiantSemestreComponent implements OnInit {

  semestres: any[];
  input1;
  input2;
  input3;
  fil;

  gotTo(viewEtudiant: string) {
    this.router.navigate([`${viewEtudiant}`]);
  }
  get notesEtudiantModules(): Array<NoteEtudiantModule> {
    return this.noteEtudiantSemestreService.notesEtudiantModules;
  }

  set notesEtudiantModules(value: Array<NoteEtudiantModule>) {
    this.noteEtudiantSemestreService.notesEtudiantModules = value;
  }
  get notesEtudiantModules1(): Array<NoteEtudiantModule> {
    return this.noteEtudiantSemestreService.notesEtudiantModules1;
  }

  set notesEtudiantModules1(value: Array<NoteEtudiantModule>) {
    this.noteEtudiantSemestreService.notesEtudiantModules1 = value;
  }
  get notesEtudiantModules2(): Array<NoteEtudiantModule> {
    return this.noteEtudiantSemestreService.notesEtudiantModules2;
  }

  set notesEtudiantModules2(value: Array<NoteEtudiantModule>) {
    this.noteEtudiantSemestreService.notesEtudiantModules2 = value;
  }
  get anneeSelect(): String {
    return this.noteEtudiantSemestreService.anneeSelect;
  }

  set anneeSelect(value: String) {
    this.noteEtudiantSemestreService.anneeSelect = value;
  }
  get years(): Array<AnneeUniversitaire> {
    return this.anneeUniversitaireService.years;
  }
  get noteSemestre(): NoteEtudiantSemestre {
    return this.noteEtudiantSemestreService.noteSemestre;
  }

  set noteSemestre(value: NoteEtudiantSemestre) {
    this.noteEtudiantSemestreService.noteSemestre = value;
  }
  get filierSelct(): string {
    return this.noteEtudiantSemestreService.filierSelct;
  }

  set filierSelct(value: string) {
    this.noteEtudiantSemestreService.filierSelct = value;
  }
  get filieres(): Array<Filiere> {
    return this.noteEtudiantSemestreService.filieres;
  }

  set filieres(value: Array<Filiere>) {
    this.noteEtudiantSemestreService.filieres = value;
  }

  constructor(private router:Router,private noteEtudiantSemestreService:NoteEtudiantSemestreService,private anneeUniversitaireService:AnneeUniversitaireService) {

    this.semestres=[
      {label: "Semestre :", value: null},
      {label: "Semestre 1", value: 1},
      {label: "Semestre 2", value: 2},
      {label: "Semestre 3",value: 3},
      {label: "Semestre 4",value: 4},
      {label: "Semestre 5", value: 5},
      {label: "Semestre 6", value: 6}
    ];
  }

  ngOnInit(): void {
    this.noteEtudiantSemestreService.findAllFiliere();
    this.anneeUniversitaireService.findAllyears();
  }
  get myOptions(): Array<MyOption> {
    return this.noteEtudiantSemestreService.myOptions;
  }
  get myNotesSemestre(): Array<NoteEtudiantSemestre> {
    return this.noteEtudiantSemestreService.myNotesSemestre;
  }
  get semestreSelct(): number {
    return this.noteEtudiantSemestreService.semestreSelct;
  }

  set semestreSelct(value: number) {
    this.noteEtudiantSemestreService.semestreSelct = value;
  }

  change1() {
    this.filierSelct=this.fil;
    this.noteEtudiantSemestreService.chercheOptions();
  }

  serachEtudiant(input1: string, input2: string, input3: number) {
    this.noteEtudiantSemestreService.serachEtudiant(input1, input2, input3);
  }

  /*detailSemestre(noteSemestres: NoteEtudiantSemestre) {
    this.noteEtudiantSemestreService.detailSemestre(noteSemestres);

  }*/
  public openCreate(noteSemestres:NoteEtudiantSemestre) {
    this.noteSemestre =noteSemestres;
    this.createDialog = true;
    this.noteEtudiantSemestreService.detailSemestre(noteSemestres);
    this.submitted = false;
  }
  get createDialog(): boolean {
    return this.noteEtudiantSemestreService.createDialog;
  }

  set createDialog(value: boolean) {
    this.noteEtudiantSemestreService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.noteEtudiantSemestreService.editDialog;
  }

  set editDialog(value: boolean) {
    this.noteEtudiantSemestreService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.noteEtudiantSemestreService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.noteEtudiantSemestreService.viewDialog = value;
  }

  get submitted(): boolean {
    return this.noteEtudiantSemestreService.submitted;
  }

  set submitted(value: boolean) {
    this.noteEtudiantSemestreService.submitted = value;
  }

  change2() {
    this.semestreSelct=this.input3;
  }

  change3() {
    this.anneeSelect=this.input2;
  }
}
