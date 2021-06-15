import { Component, OnInit } from '@angular/core';
import {NoteEtudiantModuleService} from "../../../../../controller/service/note-etudiant-module.service";
import {MessageService} from "primeng/api";
import {NoteEtudiantModule} from "../../../../../controller/model/note-etudiant-module.model";
import {InscriptionEtudiantService} from "../../../../../controller/service/inscription-etudiant.service";
import {EtudiantOption} from "../../../../../controller/model/etudiant-option.model";
import {AnneeUniversitaire} from "../../../../../controller/model/anneeUniversitaire";
import {AnneeUniversitaireService} from "../../../../../controller/service/annee-universitaire.service";
import * as moment from "moment";

@Component({
  selector: 'app-inscription-nouveau-edit',
  templateUrl: './inscription-nouveau-edit.component.html',
  styleUrls: ['./inscription-nouveau-edit.component.scss']
})
export class InscriptionNouveauEditComponent implements OnInit {

  constructor(private inscriptionEtudiantService:InscriptionEtudiantService,private annéeUniversitaireService: AnneeUniversitaireService ,private messageService: MessageService) { }
  ngOnInit(): void {
    //this.date=this.etudiantOption.etudiant.dateNaissance;
  }
  get editDialog(): boolean {
    return this.inscriptionEtudiantService.editDialog;
  }
  get dateNvEtud(): Date {
    return this.inscriptionEtudiantService.dateNvEtud;
  }

  set dateNvEtud(value: Date) {
    this.inscriptionEtudiantService.dateNvEtud = value;
  }

  addDate() {
    var response=moment(this.dateNvEtud).format('YYYY-MM-DD');
    this.etudiantOption.etudiant.dateNaissance=response;
    console.log('hadi f add date ')
    console.log(this.etudiantOption)
  }

  set editDialog(value: boolean) {
    this.inscriptionEtudiantService.editDialog = value;
  }


  public findIndexById(cne: string): number {
    let index = -1;
    for (let i = 0; i < this.etudiantOptions.length; i++) {
      if (this.etudiantOptions[i].etudiant.cne === cne) {
        index = i;
        break;
      }
    }
    return index;
  }
  get years(): Array<AnneeUniversitaire> {
    return this.annéeUniversitaireService.years;
  }

  EditStudent() {
    if (this.etudiantOption.etudiant.cne) {
      this.etudiantOptions[this.findIndexById(this.etudiantOption.etudiant.cne)] =this.etudiantOption;
    }
    this.inscriptionEtudiantService.EditStudent();
    this.editDialog = false;
  }


  public hideEditDialog() {
    this.editDialog = false;
  }
  get etudiantOption(): EtudiantOption {
    return this.inscriptionEtudiantService.etudiantOption;
  }

  get etudiantOptions(): Array<EtudiantOption> {
    return this.inscriptionEtudiantService.etudiantOptions;
  }

  set etudiantOption(value: EtudiantOption) {
    this.inscriptionEtudiantService.etudiantOption = value;
  }

}
