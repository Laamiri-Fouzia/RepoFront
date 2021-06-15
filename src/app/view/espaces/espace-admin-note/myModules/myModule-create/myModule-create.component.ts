import {Component, OnInit} from '@angular/core';
import {MyModule} from '../../../../../controller/model/myModule.model';
import {MyModuleService} from '../../../../../controller/service/myModule.service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-myModule-create',//selector: 'app-commande-create',
    templateUrl: './myModule-create.component.html',
    styleUrls: ['./myModule-create.component.scss']
})
export class MyModuleCreateComponent implements OnInit {

    constructor(private messageService: MessageService, private service: MyModuleService) {
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            this.service.save().subscribe(
                data => {
                    if(data==1){
                        this.service.serchObject(this.selected);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'le module est crée',
                        });
                    }else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error !',
                            detail: 'Attention : Une option avec le code : '+this.selected.code+' est deja existe !'
                        });
                    }
                    this.selected = new MyModule();
                }
                );
            this.createDialog = false;
        }
    }
    get selected(): MyModule {
        return this.service.selected;
    }

    set selected(value: MyModule) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
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
