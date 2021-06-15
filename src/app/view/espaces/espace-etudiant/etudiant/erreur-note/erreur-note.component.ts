import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-erreur-note',
  templateUrl: './erreur-note.component.html',
  styleUrls: ['./erreur-note.component.scss']
})
export class ErreurNoteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotEspaceEtudiant(espacesEtudiant: string) {
    this.router.navigate([`${espacesEtudiant}`]);

  }

}
