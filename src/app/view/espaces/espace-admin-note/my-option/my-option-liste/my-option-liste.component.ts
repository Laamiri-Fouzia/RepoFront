import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {FiliereService} from "../../../../../controller/service/filiere.service";
import {Filiere} from "../../../../../controller/model/filiere.model";
import {MyOption} from "../../../../../controller/model/my-option.model";
import {ModuleSemestreOptionService} from "../../../../../controller/service/module-semestre-option.service";

@Component({
  selector: 'app-my-option-liste',
  templateUrl: './my-option-liste.component.html',
  styleUrls: ['./my-option-liste.component.scss']
})
export class MyOptionListeComponent implements OnInit {

  cols: any[];


  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: FiliereService, private moduleSemestreOptionService:ModuleSemestreOptionService) {
  }

  ngOnInit(): void {
    this.service.getAllOptions();
    this.labelOption='la liste de tous les Options ';
  }
  get labelOption(): string {
    return this.service.labelOption;
  }
  set labelOption(value: string) {
    this.service.labelOption = value;
  }
  /*public delete(filiere: Filiere) {
    this.filiere = filiere;
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer ' + filiere.code + '?',
      header: 'Attention',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.filieres = this.filieres.filter(val => val.id !== this.filiere.id);
          this.filiere = new Filiere();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'la filière est supprimé',
            life: 2000
          });
        });
      }
    });
  }*/

  public deleteOption(myOption: MyOption) {
    this.myOption= myOption;

    this.service.deleteOptionByCode().subscribe(data => {
      this.myOptions = this.myOptions.filter(val => val.id !== this.myOption.id);
      this.myOption = new MyOption();
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Option est supprimé',
        life: 2000
      });
    });

    /*this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer ' + myOption.code + '?',
      header: 'Attention',
      icon: 'pi pi-exclamation-triangle',
      accept: () =>{
        this.service.deleteOptionByCode().subscribe(data => {
          this.myOptions = this.myOptions.filter(val => val.id !== this.myOption.id);
          this.myOption = new MyOption();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Option est supprimé',
            life: 2000
          });
        });
      }
    });*/
  }



  public openCreate() {
    this.myOption = new MyOption();
    this.submitted1 = false;
    this.createDialog1 = true;
  }

  public edit(filiere: Filiere) {
    this.myOption = {...this.myOption};
    this.editDialog1 = true;
  }


  /*private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'code', header: 'Code'},
      {field: 'libelle', header: 'Libelle'}

    ];
  }*/

  get myOption(): MyOption {
    return this.service.myOption;
  }
  set myOption(value: MyOption) {
    this.service.myOption =value;
  }

  get myOptions(): Array<MyOption> {
    return this.service.myOptions;
  }
  set myOptions(value: Array<MyOption>) {
    this.service.myOptions = value;
  }


  get submitted1(): boolean {
    return this.service.submitted1;
  }

  set submitted1(value: boolean) {
    this.service.submitted1 = value;
  }

  get createDialog1(): boolean {
    return this.service.createDialog1;
  }

  set createDialog1(value: boolean) {
    this.service.createDialog1 = value;
  }

  get editDialog1(): boolean {
    return this.service.editDialog1;
  }

  set editDialog1(value: boolean) {
    this.service.editDialog1 = value;
  }

  get viewDialog1():boolean {
    return this.service.viewDialog1;
  }

  set viewDialog1(value: boolean) {
    this.service.viewDialog1 = value;
  }


  choisirParam(myOption: MyOption) {
    this.moduleSemestreOptionService.choisirParam(myOption);
  }
}