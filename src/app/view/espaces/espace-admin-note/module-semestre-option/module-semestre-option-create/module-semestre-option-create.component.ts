import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {FiliereService} from "../../../../../controller/service/filiere.service";
import {ModuleSemestreOptionService} from "../../../../../controller/service/module-semestre-option.service";
import {MyModuleService} from "../../../../../controller/service/myModule.service";
import {MyModule} from "../../../../../controller/model/myModule.model";
import {ModuleSemestreOption} from "../../../../../controller/model/module-semestre-option.model";
import {Filiere} from "../../../../../controller/model/filiere.model";

@Component({
  selector: 'app-module-semestre-option-create',
  templateUrl: './module-semestre-option-create.component.html',
  styleUrls: ['./module-semestre-option-create.component.scss']
})
export class ModuleSemestreOptionCreateComponent implements OnInit {

  //moduleSelect = '';
  //typeModuleSelec = '';
  input1='';
  input2='';
  types: any[];

  get OptionSelec(): string {
    return this.moduleSemestreOptionService.OptionSelec ;
  }
  set OptionSelec(value: string) {
    this.moduleSemestreOptionService.OptionSelec=value;
  }

  constructor(private messageService: MessageService, private myModuleService: MyModuleService,
              private moduleSemestreOptionService:ModuleSemestreOptionService,) {

    this.types=[
      {type: 'Type Module', code: null},
      {type: 'Majeur', code: 'majeur'},
      {type:'Complementaire', code:'complementaire'}

    ];
  }

  change1() {
    this.moduleSemestreOptionService.typeSelec=this.input1;

  }
  /*change2() {
    this.moduleSemestreOptionService.moduleSemestreOption.myOption.code=this.input2;
  }*/

  ngOnInit(): void {
    this.myModuleService.findAll().subscribe(data => this.items = data);
  }

  get items(): Array<MyModule> {
    return this.myModuleService.items;
  }

  set items(value: Array<MyModule>) {
    this.myModuleService.items = value;
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }



  get moduleSemestreOption(): ModuleSemestreOption {
    return this.moduleSemestreOptionService.moduleSemestreOption;
  }

  set moduleSemestreOption(value: ModuleSemestreOption) {
    this.moduleSemestreOptionService.moduleSemestreOption = value;
  }

  get moduleSemestreOptions(): Array<ModuleSemestreOption> {
    return this.moduleSemestreOptionService.moduleSemestreOptions;
  }
  set moduleSemestreOptions(value: Array<ModuleSemestreOption>) {
    this.moduleSemestreOptionService.moduleSemestreOptions = value;
  }

  get createDialog(): boolean {
    return this.moduleSemestreOptionService.createDialog;
  }

  set createDialog(value: boolean) {
    this.moduleSemestreOptionService.createDialog = value;
  }

  get submitted(): boolean {
    return this.moduleSemestreOptionService.submitted;
  }

  set submitted(value: boolean) {
    this.moduleSemestreOptionService.submitted = value;
  }



  saveOptionSemestreModule(moduleselect: string, typemoduleselect: string) {

    this.moduleSemestreOptionService.saveOptionSemestreModule(moduleselect,typemoduleselect);
  }
}