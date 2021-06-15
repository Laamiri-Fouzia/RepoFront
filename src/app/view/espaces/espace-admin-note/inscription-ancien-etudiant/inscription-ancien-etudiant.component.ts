import { Component, OnInit } from '@angular/core';
import {InscriptionEtudiantService} from "../../../../controller/service/inscription-etudiant.service";
import {FiliereService} from "../../../../controller/service/filiere.service";
import {NoteEtudiantModuleService} from "../../../../controller/service/note-etudiant-module.service";
import {MyOption} from "../../../../controller/model/my-option.model";
import {NoteEtudiantModule} from "../../../../controller/model/note-etudiant-module.model";
import {EtudiantOption} from "../../../../controller/model/etudiant-option.model";
import {MessageService} from "primeng/api";
import {AnneeUniversitaire} from "../../../../controller/model/anneeUniversitaire";
import {AnneeUniversitaireService} from "../../../../controller/service/annee-universitaire.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription-ancien-etudiant',
  templateUrl: './inscription-ancien-etudiant.component.html',
  styleUrls: ['./inscription-ancien-etudiant.component.scss']
})
export class InscriptionAncienEtudiantComponent implements OnInit {

  displayTable:boolean=false;
  cols: any[];
  options: any[]=new Array();
  semestres: any[]=new Array();

  constructor(private router:Router,private messageService: MessageService, private annéeUniversitaireService: AnneeUniversitaireService, private inscriptionEtudiantService:InscriptionEtudiantService, private filiereService:FiliereService, private noteEtudiantModuleService:NoteEtudiantModuleService) {
    //anne ce que l'utilisateur voie et code ce qui est stocke

    this.semestres=[
      {label: "Semestre :", value: null},
      {label:  "Semestre 3",value: 3},
      {label: "Semestre 5", value: 5}
    ];

  }

  ngOnInit(): void {
    this.etudiantOption=null;
    this.filiereService.getAllOptions();
    this.options.push({label: 'Option :', value: null});
    this.annéeUniversitaireService.findAllyears();
  }

  private initCol() {
    this.cols = [
      {field: 'CNE', header: 'CNE'},
      {field: 'NOM', header: 'NOM'},
      {field: 'PRENOM', header: 'PRENOM'},
      {field: 'Action', header: 'Action'}
    ];
  }

  get myOptions(): Array<MyOption> {
    return this.filiereService.myOptions;
  }
  change1() {
    console.log(this.etudiantOption.anneeUniversitaire.anneeOne);
    for(let  i = 0; i < this.myOptions.length; i++) {
      this.options.push({label: this.myOptions[i].libelle, value: this.myOptions[i].code});
    }

  }

  get years(): Array<AnneeUniversitaire> {
    return this.annéeUniversitaireService.years;
  }
    set editDialog(value: boolean) {
    this.inscriptionEtudiantService.editDialog = value;
  }
  set createDialog(value: boolean) {
    this.inscriptionEtudiantService.createDialog = value;
  }

  public edit(note: NoteEtudiantModule) {
    this.editDialog = true;

  }
  public openCreate() {
    this.createDialog = true;
  }


  SearchAncienStudent() {
    this.displayTable=true;
    this.inscriptionEtudiantService.SearchAncienStudent();
  }

  set etudiantOption(value: EtudiantOption) {
    this.inscriptionEtudiantService.etudiantOption = value;
  }
  set etudiantOptions(value: Array<EtudiantOption>) {
    this.inscriptionEtudiantService.etudiantOptions = value;
  }
  get etudiantOption(): EtudiantOption {
    return this.inscriptionEtudiantService.etudiantOption;
  }

  get etudiantAnciens(): Array<EtudiantOption> {
    return this.inscriptionEtudiantService.etudiantAnciens;
  }


  set etudiantAnciens(value: Array<EtudiantOption>) {
    this.inscriptionEtudiantService.etudiantAnciens=value;
  }


  editEtudiant(etudiantOption: EtudiantOption) {

    this.etudiantOption={...etudiantOption};
    this.etudiantOption.etudiant = {...etudiantOption.etudiant};
    this.etudiantOption.semestre = {...etudiantOption.semestre};
    this.etudiantOption.myOption = {...etudiantOption.myOption};
    this.editDialog = true;
  }

  public delete(selected: EtudiantOption) {
    this.etudiantOption = selected;
    this.inscriptionEtudiantService.deleteEtudiantOption();
    this.etudiantAnciens = this.etudiantAnciens.filter(val => val.id !== this.etudiantOption.id);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Etudiant bien supprimé',
      life: 3000
    });
    /*this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer ',
      header: 'Attention',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.inscriptionEtudiantService.deleteEtudiantOption();
          //this.etudiantOptions = this.etudiantOptions.filter(val => val.id !== this.etudiantOption.id);
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Etudiant bien supprimé',
            life: 3000
          });
      }
    });*/
  }

  ch() {
    alert(this.etudiantOption.myOption.code)
  }
  gotTo(viewEtudiant: string) {
    this.router.navigate([`${viewEtudiant}`]);
  }
}
