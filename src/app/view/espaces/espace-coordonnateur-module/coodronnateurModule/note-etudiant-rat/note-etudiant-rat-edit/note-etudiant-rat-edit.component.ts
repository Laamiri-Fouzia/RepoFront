import { Component, OnInit } from '@angular/core';
import {ModuleSemestreOptionService} from "../../../../../../controller/service/module-semestre-option.service";
import {FiliereService} from "../../../../../../controller/service/filiere.service";
import {NoteEtudiantModuleService} from "../../../../../../controller/service/note-etudiant-module.service";
import {MessageService} from "primeng/api";
import {NoteEtudiantModule} from "../../../../../../controller/model/note-etudiant-module.model";

@Component({
  selector: 'app-note-etudiant-rat-edit',
  templateUrl: './note-etudiant-rat-edit.component.html',
  styleUrls: ['./note-etudiant-rat-edit.component.scss']
})
export class NoteEtudiantRatEditComponent implements OnInit {

  constructor(private noteEtudiantModuleService:NoteEtudiantModuleService,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  get editDialog(): boolean {
    return this.noteEtudiantModuleService.editDialog;
  }
  get noteEtudiantModule(): NoteEtudiantModule {
    return  this.noteEtudiantModuleService.noteEtudiantModule;
  }
  set editDialog(value: boolean) {
    this.noteEtudiantModuleService.editDialog = value;
  }
  get notesEtudiantRat(): Array<NoteEtudiantModule> {
    return this.noteEtudiantModuleService.notesEtudiantRat;
  }

  public findIndexById(cne: string): number {
    let index = -1;
    for (let i = 0; i < this.notesEtudiantRat.length; i++) {
      if (this.notesEtudiantRat[i].etudiant.cne === cne) {
        index = i;
        break;
      }
    }
    return index;
  }

  EditNote() {
    if(this.noteEtudiantModule.noteFinalApresRat<0 || this.noteEtudiantModule.noteFinalApresRat>20)
    {
      this.messageService.add({
        severity: 'error',
        summary: 'Error !',
        detail: 'Opération echouée: entrer une note entre 0 et 20  !'
      });

    }else{
    if (this.noteEtudiantModule.etudiant.cne) {
      this.notesEtudiantRat[this.findIndexById(this.noteEtudiantModule.etudiant.cne)] = this.noteEtudiantModule;
    }
    this.noteEtudiantModuleService.EditNoteRat();

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'la modification est effectuée ',
      life: 3000
    });
    }
    this.hideEditDialog();
  }
  public hideEditDialog() {
    this.editDialog = false;
  }

}
