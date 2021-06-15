import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {MyModuleService} from '../../../../../controller/service/myModule.service';
import {MyModule} from '../../../../../controller/model/myModule.model';

@Component({
  selector: 'app-myModule-view',
  templateUrl: './myModule-view.component.html',
  styleUrls: ['./myModule-view.component.scss']
})
export class MyModuleViewComponent implements OnInit {


  constructor(private messageService: MessageService, private service: MyModuleService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): MyModule {
    return this.service.selected;
  }

  set selected(value: MyModule) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
