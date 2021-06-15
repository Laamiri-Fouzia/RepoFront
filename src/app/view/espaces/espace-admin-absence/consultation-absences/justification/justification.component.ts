import { Component, OnInit } from '@angular/core';
import {ConsultationAbsenceService} from "../../../../../controller/service/consultation-absence.service";

@Component({
  selector: 'app-justification',
  templateUrl: './justification.component.html',
  styleUrls: ['./justification.component.scss']
})
export class JustificationComponent implements OnInit {

  constructor(private consultationAbsenceService:ConsultationAbsenceService) { }

  ngOnInit(): void {

  }

  get retrievedImage(): any {
    return this.consultationAbsenceService.retrievedImage;
  }
  set retrievedImage(value: any) {
    this.consultationAbsenceService.retrievedImage = value;
  }
  set displayImage(value: boolean) {
    this.consultationAbsenceService.displayImage = value;
  }
  get displayImage(): boolean {
    return this.consultationAbsenceService.displayImage;
  }

  hideCreateDialog() {
    this.displayImage=false;
  }
}
