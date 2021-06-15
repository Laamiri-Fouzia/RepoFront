import {Component, OnInit} from '@angular/core';
import {ModuleSemestreOptionService} from "../../../../../controller/service/module-semestre-option.service";
import {FiliereService} from "../../../../../controller/service/filiere.service";
import {NoteEtudiantModuleService} from "../../../../../controller/service/note-etudiant-module.service";
import {MyOption} from "../../../../../controller/model/my-option.model";
import {ModuleSemestreOption} from "../../../../../controller/model/module-semestre-option.model";
import {NoteEtudiantModule} from "../../../../../controller/model/note-etudiant-module.model";
import {AnneeUniversitaire} from "../../../../../controller/model/anneeUniversitaire";
import {AnneeUniversitaireService} from "../../../../../controller/service/annee-universitaire.service";
import {Workbook} from "exceljs";
import * as fs from 'file-saver';
import {EtudiantOption} from "../../../../../controller/model/etudiant-option.model";

@Component({
    selector: 'app-note-etudiant-rat',
    templateUrl: './note-etudiant-rat.component.html',
    styleUrls: ['./note-etudiant-rat.component.scss']
})
export class NoteEtudiantRatComponent implements OnInit {

    input1: number;
    input2 = '';
    input3: number;
    displaytable: boolean = false;
    input4 = '';
    modules: any[] = new Array();
    cols: any[];
    options: any[] = new Array();
    semestres: any[] = new Array();

    constructor(private annéeUniversitaireService: AnneeUniversitaireService, private moduleSemestreOptionService: ModuleSemestreOptionService, private filiereService: FiliereService, private noteEtudiantModuleService: NoteEtudiantModuleService) {
        //anne ce que l'utilisateur voie et code ce qui est stock

        this.semestres = [
            {label: "Semestre :", value: null},
            {label: "Semestre 1", value: 1},
            {label: "Semestre 2", value: 2},
            {label: "Semestre 3", value: 3},
            {label: "Semestre 4", value: 4},
            {label: "Semestre 5", value: 5},
            {label: "Semestre 6", value: 6}
        ];

    }

    get years(): Array<AnneeUniversitaire> {
        return this.annéeUniversitaireService.years;
    }

    get myOptions(): Array<MyOption> {
        return this.filiereService.myOptions;
    }

    get moduleSemestreOptions(): Array<ModuleSemestreOption> {
        return this.moduleSemestreOptionService.moduleSemestreOptions;
    }

    get notesEtudiantModule(): Array<NoteEtudiantModule> {
        return this.noteEtudiantModuleService.notesEtudiantModule;
    }

    get noteEtudiantModule(): NoteEtudiantModule {
        return this.noteEtudiantModuleService.noteEtudiantModule;
    }

    set noteEtudiantModule(value: NoteEtudiantModule) {
        this.noteEtudiantModuleService.noteEtudiantModule = value;
    }

    get notesEtudiantRat(): Array<NoteEtudiantModule> {
        return this.noteEtudiantModuleService.notesEtudiantRat;
    }

    set notesEtudiantRat(value: Array<NoteEtudiantModule>) {
        this.noteEtudiantModuleService.notesEtudiantRat = value;
    }

    get editDialog(): boolean {
        return this.noteEtudiantModuleService.editDialog;
    }

    set editDialog(value: boolean) {
        this.noteEtudiantModuleService.editDialog = value;
    }

    get moduleRatt() {
        return this.noteEtudiantModuleService.moduleRatt;
    }

    get moduleSemestreOption(): ModuleSemestreOption {
        return this.moduleSemestreOptionService.moduleSemestreOption;
    }

    ngOnInit(): void {
        this.filiereService.getAllOptions();
        this.options.push({label: 'Option :', value: null});
        this.modules.push({label: 'Module  :', value: null});
        this.annéeUniversitaireService.findAllyears();
        console.log(this.modules);
    }

    change1() {
        this.moduleSemestreOptionService.anneUniveSelec = this.input1;
        for (let i = 0; i < this.myOptions.length; i++) {
            this.options.push({label: this.myOptions[i].libelle, value: this.myOptions[i].code});
        }

    }

    change2() {
        this.moduleSemestreOptionService.moduleSemestreOption.myOption.code = this.input2;
        this.moduleSemestreOptionService.findOptionByCode();
    }

    change3() {
        this.moduleSemestreOptionService.semestreselec = this.input3;
        this.moduleSemestreOptionService.findByOptionCode();

    }

    change4() {
        if (this.modules.length <= this.moduleSemestreOptions.length) {
            for (let i = 0; i < this.moduleSemestreOptions.length; i++) {
                this.modules.push({
                    label: this.moduleSemestreOptions[i].myModule.libelle,
                    value: this.moduleSemestreOptions[i].code
                });
            }
        }
    }

    public edit(note: NoteEtudiantModule) {
        this.noteEtudiantModule = {...note};
        this.editDialog = true;
    }

    listeRatt(input4: string) {
        this.noteEtudiantModuleService.listeRatt(input4);
    }

    downloadExcel() {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('notes_rattrapage');
        worksheet.columns = [
            {header: 'CNE', key: 'cne', width: 20},
            {header: 'NOM', key: 'nom', width: 20},
            {header: 'PRENOM', key: 'prenom', width: 20},
            {header: 'NOTE FINALE RAT', key: 'noteFinalRat', width: 20},
            {header: 'NOTE MODULE NORMALE', key: 'noteModuleNormale', width: 20},
            {header: 'NOTE CONTINUE', key: 'notContinue', width: 20},
            {header: 'NOTE MODULE SESSION RAT', key: 'noteModuleSessionRat', width: 20},
            {header: 'NOTE GLOBALE', key: 'noteGlobal', width: 20},
            {header: 'Resultat', key: 'resultat', width: 20}
        ];
        this.noteEtudiantModuleService.notesEtudiantRat.forEach(e => {

            worksheet.addRow({
                cne: e.etudiant.cne,
                nom: e.etudiant.nom,
                prenom: e.etudiant.prenom,
                noteFinalRat: e.noteFinalApresRat,
                noteModuleNormale: e.noteModuleNormal,
                notContinue: e.noteContinue,
                noteModuleSessionRat: e.noteModuleRat,
                noteGlobal: e.noteGlobale,
                resultat: e.etatValidation.libelle
            }, 'n');
        });
        workbook.xlsx.writeBuffer().then((data) => {
            const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
            fs.saveAs(blob, 'Notes_etudiants_Ratt_' + this.input3 + '_' + this.input4 + '_' + this.input1 + '.xlsx');
        });
    }


    /*downloadExcel() {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet('notes');
      worksheet.columns = [
        { header: 'CNE', key: 'cne', width: 10 },
        { header: 'Nom', key: 'etudiant', width: 10 },
        { header: 'Prenom', key: 'etudiant1', width: 10 },
        { header: 'Note Finale Rattrapage', key: 'noteFinalRat', width: 32 },
        { header: 'Note Module Normale', key: 'noteModuleNormale', width: 10 },
        { header: 'Note Module Session Rat', key: 'noteModuleSessionRat', width: 10 },
        { header: 'Resultat', key: 'resultat', width: 10 }
      ];
      this.noteEtudiantModuleService.notesEtudiantModule.forEach(e => {
        worksheet.addRow({
          cne: e.etudiant.cne,
          etudiant: e.etudiant.nom,
          etudiant1:e.etudiant.prenom,
          noteFinalRat: e.noteFinalApresRat,
          noteModuleNormale: e.noteModuleNormal,
          noteModuleSessionRat:e.noteModuleRat,
          resultat:e.etatValidation.libelle

        }, 'n');
      });

      workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const annee= this.input1+ this.input1+1
        fs.saveAs(blob, 'Notes_etudiants_Ratt_'+this.input3+'_'+this.input4+'_'+annee+'.xlsx');
      });
    }*/

    onFileChange(evt: any) {

        this.notesEtudiantRat = new Array<NoteEtudiantModule>();
        const target: DataTransfer = <DataTransfer>(evt.target);
        if (target.files.length !== 1) throw new Error('Cannot use multiple files');

        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {//un gestionnaire pour l'evenement abort (qui se declenche lorsque le chargement de donnee est annuler)
            this.noteEtudiantModule = new NoteEtudiantModule();
            const bstr: string = e.target.result;
            const data = <any[]>this.noteEtudiantModuleService.importFromFile(bstr);
            const header: string[] = Object.getOwnPropertyNames(new NoteEtudiantModule());
            const x = data.slice(1);

            for (let i = 0; i < x.length; i++) {//i=2
                for (let j = 0; j <= x[i].length; j++) {
                    if (j == 0) {
                        this.noteEtudiantModule.etudiant.cne = x[i][j];
                    } else if (j == 1) {
                        this.noteEtudiantModule.etudiant.nom = x[i][j];
                    } else if (j == 2) {
                        this.noteEtudiantModule.etudiant.prenom = x[i][j];
                    } else if (j == 3) {
                        this.noteEtudiantModule.noteFinalApresRat = x[i][j];
                    } else if (j == 4) {
                        this.noteEtudiantModule.noteModuleNormal = x[i][j];
                    } else if (j == 5) {
                        this.noteEtudiantModule.noteContinue = x[i][j];
                    } else if (j == 6) {
                        this.noteEtudiantModule.noteModuleRat = x[i][j];
                    } else if (j == 7) {
                        this.noteEtudiantModule.noteGlobale = x[i][j];
                    } else if (j == 8) {
                        this.noteEtudiantModule.etatValidation.libelle = x[i][j];
                    }

                }

                let pc = this.moduleSemestreOption.myOption.coefContinue;
                let pf = this.moduleSemestreOption.myOption.coefFinale;
                let nc = this.noteEtudiantModule.noteContinue;
                let nfApresR = this.noteEtudiantModule.noteFinalApresRat;
                this.noteEtudiantModule.noteModuleRat = (pc * nc) + (pf * nfApresR);
                this.noteEtudiantModule.moduleSemestreOption.code = this.moduleRatt;
                if (this.noteEtudiantModule.noteModuleRat > this.noteEtudiantModule.noteModuleNormal) {
                    this.noteEtudiantModule.noteGlobale = this.noteEtudiantModule.noteModuleRat;
                }

                if (this.noteEtudiantModule.noteGlobale < 10)
                    this.noteEtudiantModule.etatValidation.libelle = 'Non Validé';
                else
                    this.noteEtudiantModule.etatValidation.libelle = 'V aprés Rattrapage';
                this.notesEtudiantRat.push(this.clone(this.noteEtudiantModule));
                this.noteEtudiantModuleService.EditNoteRatForEXcel();
            }

        };
        reader.readAsBinaryString(target.files[0]);

    }

    clone(not: NoteEtudiantModule) {
        let n = new NoteEtudiantModule();
        n.etudiant = {...not.etudiant}
        n.moduleSemestreOption = {...not.moduleSemestreOption}
        n.noteEtudiantSemestre = {...not.noteEtudiantSemestre}
        n.etatValidation = {...not.etatValidation}
        n.noteGlobale = not.noteGlobale
        n.noteModuleNormal = not.noteModuleNormal
        n.noteModuleRat = not.noteModuleRat
        n.noteContinue = not.noteContinue
        n.noteFinalApresRat = not.noteFinalApresRat
        n.noteFinalAvRat = not.noteFinalAvRat
        return n;
    }

    private initCol() {
        this.cols = [
            {field: 'Etudiant', header: 'Etudiant'},
            {field: 'Note Final Rat', header: 'Note module session normale'},
            {field: 'Note module session normale', header: 'Note module session normale'},
            {field: 'Note module session Rat', header: 'Note module session normale'},
            {field: 'Resultat', header: 'Resultat'},
            {field: 'Action', header: 'Action'}
        ];
    }

}



