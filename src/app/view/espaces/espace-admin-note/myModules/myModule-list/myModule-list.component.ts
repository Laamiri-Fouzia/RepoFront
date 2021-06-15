import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MyModule} from '../../../../../controller/model/myModule.model';
import {MyModuleService} from '../../../../../controller/service/myModule.service';

// import {ConfirmationService} from 'primeng/api';

@Component({
    selector: 'app-myModule-list',
    templateUrl: './myModule-list.component.html',
    styleUrls: ['./myModule-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class MyModuleListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: MyModuleService) {
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: MyModule) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Voulez-vous vraiment supprimer ' + selected.code + '?',
            header: 'Attention',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByCode().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new MyModule();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'le module est supprimé',
                        life: 3000
                    });
                });
            }
        });
    }
    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Voulez-vous vraiment supprimer les éléments sélectionnés ?',
            header: 'Attention',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByCode().subscribe(data =>{
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'la suppression est effectuée',
                        life: 3000
                    });
                });
            }
        });
    }
    public openCreate() {
        this.selected = new MyModule();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(myModule: MyModule) {
        this.selected = {...myModule};
        this.editDialog = true;
    }
    public view(commande: MyModule) {
        this.selected = {...commande};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [

            {field: 'code', header: 'CODE'},
            {field: 'libelle', header: 'LIBELLE'}

        ];
    }

    get selected(): MyModule {
        return this.service.selected;
    }

    set selected(value: MyModule) {
        this.service.selected = value;
    }

    get items(): Array<MyModule> {
        return this.service.items;
    }

    set items(value: Array<MyModule>) {
        this.service.items = value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get selectes(): Array<MyModule> {
        return this.service.selectes;
    }

    set selectes(value: Array<MyModule>) {
        this.service.selectes = value;
    }

}
