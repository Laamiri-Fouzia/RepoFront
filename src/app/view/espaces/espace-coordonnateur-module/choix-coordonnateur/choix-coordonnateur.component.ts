import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-choix-coordonnateur',
  templateUrl: './choix-coordonnateur.component.html',
  styleUrls: ['./choix-coordonnateur.component.scss']
})
export class ChoixCoordonnateurComponent implements OnInit {

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
