import { Component, OnInit } from '@angular/core';
import {NoteEtudiantSemestreService} from "../../../../../controller/service/note-etudiant-semestre.service";
import {NoteEtudiantModule} from "../../../../../controller/model/note-etudiant-module.model";

@Component({
  selector: 'app-note-etudiant-semestre-modules',
  templateUrl: './note-etudiant-semestre-modules.component.html',
  styleUrls: ['./note-etudiant-semestre-modules.component.scss']
})
export class NoteEtudiantSemestreModulesComponent implements OnInit {

  constructor(private noteEtudiantSemestreService:NoteEtudiantSemestreService) { }

  ngOnInit(): void {
  }
  get semestreSelct(): number {
    return this.noteEtudiantSemestreService.semestreSelct;
  }

  set semestreSelct(value: number) {
    this.noteEtudiantSemestreService.semestreSelct = value;
  }
  get createDialog(): boolean {
    return this.noteEtudiantSemestreService.createDialog;
  }

  set createDialog(value: boolean) {
    this.noteEtudiantSemestreService.createDialog = value;
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

}
