import { Component, OnInit } from '@angular/core';
import {NoteEtudiantModuleService} from "../../../../../../controller/service/note-etudiant-module.service";
import {NoteEtudiantModule} from "../../../../../../controller/model/note-etudiant-module.model";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-note-etudiant-module-edit',
  templateUrl: './note-etudiant-module-edit.component.html',
  styleUrls: ['./note-etudiant-module-edit.component.scss']
})
export class NoteEtudiantModuleEditComponent implements OnInit {

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
  get notesEtudiantModule(): Array<NoteEtudiantModule> {
    return this.noteEtudiantModuleService.notesEtudiantModule;
  }

  public findIndexById(cne: string): number {
    let index = -1;
    for (let i = 0; i < this.notesEtudiantModule.length; i++) {
      if (this.notesEtudiantModule[i].etudiant.cne === cne) {
        index = i;
        break;
      }
    }
    return index;
  }

  EditNote() {
    if(this.noteEtudiantModule.noteContinue<0 || this.noteEtudiantModule.noteContinue>20 || this.noteEtudiantModule.noteFinalAvRat<0 || this.noteEtudiantModule.noteFinalAvRat>20)
    {
      this.messageService.add({
        severity: 'error',
        summary: 'Error !',
        detail: 'Opération echouée: entrer une note entre 0 et 20  !'
      });

    }else{
    if (this.noteEtudiantModule.etudiant.cne) {
      this.notesEtudiantModule[this.findIndexById(this.noteEtudiantModule.etudiant.cne)] = this.noteEtudiantModule;
    }

    //this.noteEtudiantModule.moduleSemestreOption.myOption.coefFinale=
    this.noteEtudiantModuleService.EditNote();

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

    verifyNote(note:number) {
       //if(note>20 || note<0)


    }
}
