import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-myModules',
  templateUrl: './myModules.component.html',
  styleUrls: ['./myModules.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class MyModulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
