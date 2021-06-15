import { Component, OnInit } from '@angular/core';
import {ConsultationAbsenceService} from "../../../../controller/service/consultation-absence.service";
import {Absence} from "../../../../controller/model/absence.model";
import {HttpClient} from "@angular/common/http";
import {image} from "html2canvas/dist/types/css/types/image";
import {Router} from "@angular/router";

@Component({
  selector: 'app-consultation-absences',
  templateUrl: './consultation-absences.component.html',
  styleUrls: ['./consultation-absences.component.scss']
})
export class ConsultationAbsencesComponent implements OnInit {
  input;
    etats: any;
  etatAbs: any;

  selectedFile: File;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(private router:Router,private consultationAbsenceService:ConsultationAbsenceService,private httpClient: HttpClient) {
    this.etats=[
      {label: "accepte", value: "accepte"},
      {label: "refuse", value: "refuse"},
    ];
  }

  ngOnInit(): void {
  }
  gotTo(viewEtudiant: string) {
    this.router.navigate([`${viewEtudiant}`]);
  }
  get retrievedImage(): any {
    return this.consultationAbsenceService.retrievedImage;
  }
  set retrievedImage(value: any) {
    this.consultationAbsenceService.retrievedImage = value;
  }
  get displayImage(): boolean {
    return this.consultationAbsenceService.displayImage;
  }

  set displayImage(value: boolean) {
    this.consultationAbsenceService.displayImage = value;
  }
  get selectors(): Array<Absence> {
    return this.consultationAbsenceService.selectors;
  }

  set selectors(value: Array<Absence>) {
    this.consultationAbsenceService.selectors = value;
  }

  get etatAbse(): string {
    return this.consultationAbsenceService.etatAbse;
  }

  set etatAbse(value: string) {
    this.consultationAbsenceService.etatAbse = value;
  }
  get absence(): Absence {
    return this.consultationAbsenceService.absence;
  }

  set absence(value: Absence) {
    this.consultationAbsenceService.absence = value;
  }

  get absences(): Array<Absence> {
    return this.consultationAbsenceService.absences;
  }

  set absences(value: Array<Absence>) {
    this.consultationAbsenceService.absences = value;
  }

  chercheAbsences(input:Date) {
    this.consultationAbsenceService.chercheAbsences(input);
  }

  change1() {
    this.etatAbse=this.etatAbs;
  }

  updateAbsences(absences: Array<Absence>,selectors:Array<Absence>) {
   this.consultationAbsenceService.updateAbsences(absences,selectors) ;
  }

  //for image
  getImage(absence:Absence) {
    this.displayImage=true;
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.imageName=absence.seance.libelle+absence.etudiant.cne;
    this.httpClient.get('http://localhost:8036/ispits-project/image/get/' + this.imageName)
        .subscribe(
            res => {
              console.log('dkhelt l res ')
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;


            }
        );
  }

}
