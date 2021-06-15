import { Component, OnInit } from '@angular/core';
import {Filiere} from "../../../../../controller/model/filiere.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {FiliereService} from "../../../../../controller/service/filiere.service";
import {MyOption} from "../../../../../controller/model/my-option.model";

@Component({
  selector: 'app-filiere-list',
  templateUrl: './filiere-list.component.html',
  styleUrls: ['./filiere-list.component.scss']
})
export class FiliereListComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: FiliereService) {
  }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.filieres = data);
  }

  public delete(filiere: Filiere) {
    this.filiere = filiere;
    this.service.deleteByCode().subscribe(data => {
      this.filieres = this.filieres.filter(val => val.id !== this.filiere.id);
      this.filiere = new Filiere();
    });
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'la filière est supprimé',
      life: 2000
    });

    /*this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer ' + filiere.code + '?',
      header: 'Attention',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.filieres = this.filieres.filter(val => val.id !== this.filiere.id);
          this.filiere = new Filiere();

        });
      }
    });*/
  }


  public openCreate() {
    this.filiere = new Filiere();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(filiere: Filiere) {
    this.filiere = {...filiere};
    this.editDialog = true;
  }


  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'code', header: 'Code'},
      {field: 'libelle', header: 'Libelle'}

    ];
  }

  get filiere(): Filiere {
    return this.service.filiere;
  }
  set filiere(value: Filiere) {
    this.service.filiere =value;
  }

  get filieres(): Array<Filiere> {
    return this.service.filieres;
  }
  set filieres(value: Array<Filiere>) {
    this.service.filieres = value;
  }


  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  detailFiliere(filiere: Filiere) {
    this.service.labelOption='La liste des Options de la filiere :'+filiere.libelle;
    this.service.detailFiliere(filiere);
  }


}