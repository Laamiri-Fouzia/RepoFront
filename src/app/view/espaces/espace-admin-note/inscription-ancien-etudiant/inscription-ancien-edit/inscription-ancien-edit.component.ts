import { Component, OnInit } from '@angular/core';
import {InscriptionEtudiantService} from "../../../../../controller/service/inscription-etudiant.service";
import {MessageService} from "primeng/api";
import {EtudiantOption} from "../../../../../controller/model/etudiant-option.model";

@Component({
  selector: 'app-inscription-ancien-edit',
  templateUrl: './inscription-ancien-edit.component.html',
  styleUrls: ['./inscription-ancien-edit.component.scss']
})
export class InscriptionAncienEditComponent implements OnInit {

  constructor(private inscriptionEtudiantService:InscriptionEtudiantService ,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  get editDialog(): boolean {
    return this.inscriptionEtudiantService.editDialog;
  }

  set editDialog(value: boolean) {
    this.inscriptionEtudiantService.editDialog = value;
  }

  get etudiantAnciens(): Array<EtudiantOption> {
    return this.inscriptionEtudiantService.etudiantAnciens;
  }


  set etudiantAnciens(value: Array<EtudiantOption>) {
    this.inscriptionEtudiantService.etudiantAnciens=value;
  }

  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.etudiantAnciens.length; i++) {
      if (this.etudiantAnciens[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  EditStudent() {
    if (this.etudiantOption.id) {
      this.etudiantAnciens[this.findIndexById(this.etudiantOption.id)] = this.etudiantOption;
    }
    this.inscriptionEtudiantService.EditStudent();
    this.hideEditDialog();
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'la modification est effectuée ',
      life: 3000
    });
    this.etudiantOption=null;
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
