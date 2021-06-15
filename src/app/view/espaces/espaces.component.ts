import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MyModuleService} from "../../controller/service/myModule.service";

@Component({
  selector: 'app-espaces',
  templateUrl: './espaces.component.html',
  styleUrls: ['./espaces.component.scss']
})
export class EspacesComponent implements OnInit {constructor(private router:Router,private service: MyModuleService) { }

  ngOnInit(): void {
  }

  gotToAccueil(accueilEspace: string) {
    this.router.navigate([`${accueilEspace}`]);
  }
  gotToAdmin(viewLogin: string) {
    this.router.navigate([`${viewLogin}`]);
  }

  gotToCoor(viewLogin: string) {
    this.router.navigate([`${viewLogin}`]);
  }
  gotToProf(viewLogin: string) {
    this.router.navigate([`${viewLogin}`]);
  }

  gotToEtudiant(espaceEtudiant: string) {
    this.router.navigate([`${espaceEtudiant}`]);
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }


  public openCreate() {
    //this.selected = new MyModule();
    this.submitted = false;
    this.createDialog = true;
  }

}
