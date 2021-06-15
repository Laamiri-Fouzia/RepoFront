import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-espace-admin-absence',
  templateUrl: './espace-admin-absence.component.html',
  styleUrls: ['./espace-admin-absence.component.scss']
})
export class EspaceAdminAbsenceComponent implements OnInit {

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
