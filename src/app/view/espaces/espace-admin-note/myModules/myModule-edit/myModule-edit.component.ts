import {Component, OnInit} from '@angular/core';
import {MyModule} from '../../../../../controller/model/myModule.model';
import {MessageService} from 'primeng/api';
import {MyModuleService} from '../../../../../controller/service/myModule.service';

@Component({
    selector: 'app-myModule-edit',
    templateUrl: './myModule-edit.component.html',
    styleUrls: ['./myModule-edit.component.scss']
})
export class MyModuleEditComponent implements OnInit {

    constructor(private messageService: MessageService, private service: MyModuleService) {
    }

    ngOnInit(): void {
    }

    public edit() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                this.service.edit().subscribe(data => {
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'la modification est effectuée ',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new MyModule();
        }
    }

  public hideEditDialog() {
    this.editDialog = false;
  }
    get selected(): MyModule {
        return this.service.selected;
    }

    set selected(value: MyModule) {
        this.service.selected = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<MyModule> {
        return this.service.items;
    }

    set items(value: Array<MyModule>) {
        this.service.items = value;
    }


}
