import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-espace-admin-note',
  templateUrl: './espace-admin-note.component.html',
  styleUrls: ['./espace-admin-note.component.scss']
})
export class EspaceAdminNoteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotTo(viewEtudiant: string) {
    this.router.navigate([`${viewEtudiant}`]);
  }
}
