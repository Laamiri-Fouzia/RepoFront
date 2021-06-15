import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {AppMainComponent} from "../../app.main.component";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {



  model: any[];

  constructor(public app: AppComponent, public appMain: AppMainComponent,private router:Router) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: ['/']

      }, {
        label: 'Epaces', icon: 'pi pi-desktop', routerLink: ['/accueil/espace']

      }, {
        label: 'Formation', icon: 'pi pi-book', routerLink: ['/accueil/espace']

      }, {
        label: 'Aide', icon: 'pi pi-question-circle', routerLink: ['/accueil/espace']

      },
    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }


  gotToPage(accueilEspace: string) {
    this.router.navigate([`${accueilEspace}`]);
  }
}
