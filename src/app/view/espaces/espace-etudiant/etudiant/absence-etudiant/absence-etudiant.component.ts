import { Component, OnInit } from '@angular/core';
import {AnneeUniversitaire} from "../../../../../controller/model/anneeUniversitaire";
import {AnneeUniversitaireService} from "../../../../../controller/service/annee-universitaire.service";
import {AbsenceService} from "../../../../../controller/service/absence.service";
import {Absence} from "../../../../../controller/model/absence.model";
import {HttpClient} from "@angular/common/http";
import {ImageModl} from "../../../../../controller/model/image-modl.model";
import {MessageService} from "primeng/api";
import * as moment from "moment";
import {Router} from "@angular/router";
@Component({
  selector: 'app-absence-etudiant',
  templateUrl: './absence-etudiant.component.html',
  styleUrls: ['./absence-etudiant.component.scss']
})
export class AbsenceEtudiantComponent implements OnInit {
  annee: string;
  semstre: string;
  semestres: any[]=new Array();
  cne: string;
  imageName: any;
  message: string;

  constructor(private messageService: MessageService,private router:Router,private annéeUniversitaireService: AnneeUniversitaireService,private absenceService:AbsenceService,private httpClient: HttpClient) {
    this.semestres=[
      {label: "Semestre :", value: null},
      {label: "Semestre 1", value: 1},
      {label: "Semestre 2", value: 2},
      {label:  "Semestre 3",value: 3},
      {label:  "Semestre 4",value: 4},
      {label: "Semestre 5", value: 5},
      {label: "Semestre 6", value: 6}
    ];
  }

  ngOnInit(): void {
    this.annéeUniversitaireService.findAllyears();
    this.absences=new Array<Absence>();
  }

  set absences(value: Array<Absence>) {
    this.absenceService.absences = value;
  }
  get absences(): Array<Absence> {
    return this.absenceService.absences;
  }

  get years(): Array<AnneeUniversitaire> {
    return this.annéeUniversitaireService.years;
  }

  searchAbsence(annee: string, semstre: string, cne: string) {
      this.absenceService.searchAbsence(annee, semstre, cne)
  }
  //for images
  selectedFile: File;

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  checkDate(dateMax:Date){
    let now=new Date();
    if(now.getTime()===dateMax.getTime() || now<dateMax)
      return 1;
    else
      return -1;
}

  onUpload(absence:Absence) {
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    let nameData=absence.seance.libelle+absence.etudiant.cne;
    let dateAbsence:Date=moment(absence.seance.dateSeance).toDate();
    dateAbsence.setDate(dateAbsence.getDate()+2);
    if(this.checkDate(dateAbsence)==1)
    {
      this.httpClient.post('http://localhost:8036/ispits-project/image/upload/nameData/'+nameData, uploadImageData)
          .subscribe(
              data => {
                if(data==1){
                  if(absence.imageModel==null)
                    absence.imageModel=new ImageModl();
                  absence.imageModel.nameData=nameData;
                  this.absenceService.updateAbsence(absence);
                  this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'justfication Bien ajoutée!',

                  });
                }else{
                  this.messageService.add({
                    severity: 'error',
                    summary: 'Error !',
                    detail: 'une erreur servenu :justification deja existe ou bien operation echouée reassayer une autre fois s\'il vous plait !'
                  });
                }
              },error => {
                console.log(error);
              }
          );
    }else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error !',
        detail: 'Vous ne pouvez pas ajouter du justification le dernier delai été '+moment(dateAbsence).format('YYYY-MM-DD')
      });
    }



  }


    gotEspaceEtudiant(espacesEtudiant: string) {
      this.router.navigate([`${espacesEtudiant}`]);

    }
}
