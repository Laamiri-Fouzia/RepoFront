import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.scss']
})
export class EspaceEtudiantComponent implements OnInit {

  constructor(private router:Router) {
  }

  items: MenuItem[];

  ngOnInit() {

  }

  gotToNote(viewEtudiant: string) {
    this.router.navigate([`${viewEtudiant}`]);
  }

  gotToAbsence(viewAbsenceEtudiant: string) {
    this.router.navigate([`${viewAbsenceEtudiant}`]);
  }
}
