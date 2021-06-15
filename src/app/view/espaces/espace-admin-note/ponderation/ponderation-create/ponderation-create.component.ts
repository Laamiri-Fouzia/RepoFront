import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {PonderationService} from "../../../../../controller/service/ponderation.service";
import {MyOption} from "../../../../../controller/model/my-option.model";

@Component({
  selector: 'app-ponderation-create',
  templateUrl: './ponderation-create.component.html',
  styleUrls: ['./ponderation-create.component.scss']
})
export class PonderationCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,private ponderationService:PonderationService) { }
  input1;
  input2;
  ngOnInit(): void {
  }
  get createDialog(): boolean {
    return this.ponderationService.createDialog;
  }

  set createDialog(value: boolean) {
    this.ponderationService.createDialog = value;
  }

  get submitted(): boolean {
    return this.ponderationService.submitted;
  }

  set submitted(value: boolean) {
    this.ponderationService.submitted = value;
  }
  get myOption(): MyOption {

    return this.ponderationService.myOption;
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  savePonderation(input1:number,input2:number){
    this.ponderationService.savePonderation(input1,input2);
  }
}
