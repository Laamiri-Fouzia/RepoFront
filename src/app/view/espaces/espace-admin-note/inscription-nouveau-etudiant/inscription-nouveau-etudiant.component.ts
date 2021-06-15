import {Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {FiliereService} from "../../../../controller/service/filiere.service";
import {NoteEtudiantModuleService} from "../../../../controller/service/note-etudiant-module.service";
import {MyOption} from "../../../../controller/model/my-option.model";
import {NoteEtudiantModule} from "../../../../controller/model/note-etudiant-module.model";
import {InscriptionEtudiantService} from "../../../../controller/service/inscription-etudiant.service";
import {EtudiantOption} from "../../../../controller/model/etudiant-option.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {AnneeUniversitaireService} from "../../../../controller/service/annee-universitaire.service";
import {AnneeUniversitaire} from "../../../../controller/model/anneeUniversitaire";
import {Workbook} from "exceljs";
import * as fs from 'file-saver';
import html2canvas from 'html2canvas';

import jsPDF from 'jspdf';
import {Etudiant} from "../../../../controller/model/etudiant.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import * as moment from "moment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription-nouveau-etudiant',
  templateUrl: './inscription-nouveau-etudiant.component.html',
  styleUrls: ['./inscription-nouveau-etudiant.component.scss']
})
export class InscriptionNouveauEtudiantComponent implements OnInit {

  cols: any[];
  options: any[]=new Array();
  semestres: any[]=new Array();
  displayTable:boolean=false;
  private urlEtudiantOption = environment.baseUrl + 'etudiantOption/';

  constructor(private router:Router,private http: HttpClient,private annéeUniversitaireService: AnneeUniversitaireService, private messageService: MessageService, private inscriptionEtudiantService:InscriptionEtudiantService, private filiereService:FiliereService, private confirmationService: ConfirmationService, private noteEtudiantModuleService:NoteEtudiantModuleService) {
    //anne ce que l'utilisateur voit et code ce qui est stocke


  }

  ngOnInit(): void {
    this.etudiantOption=null;
    this.filiereService.getAllOptions();
    this.options.push({label: 'Option :', value: null});
    this.annéeUniversitaireService.findAllyears();
  }


  get years(): Array<AnneeUniversitaire> {
    return this.annéeUniversitaireService.years;
  }
  get myOptions(): Array<MyOption> {
    return this.filiereService.myOptions;
  }
  gotTo(viewEtudiant: string) {
    this.router.navigate([`${viewEtudiant}`]);
  }

  change1() {
    //const maDate: Date;
    for(let  i = 0; i < this.myOptions.length; i++) {
      this.options.push({label: this.myOptions[i].libelle, value: this.myOptions[i].code});
    }
    /*let maintenant = maDate.getDate() + '/' + ((maDate.getMonth() + 1)) + '/' + maDate.getFullYear()+ ' ' + maDate.getHours() + ':' + maDate.getMinutes()+ ':' + maDate.getSeconds());
    console.log(maintenant)*/

  }

  set editDialog(value: boolean) {
    this.inscriptionEtudiantService.editDialog = value;
  }
  set createDialog(value: boolean) {
    this.inscriptionEtudiantService.createDialog = value;
  }

  public edit(note: NoteEtudiantModule) {
    this.editDialog = true;

  }
  public openCreate() {
    this.createDialog = true;
  }


  SearchStudent() {
    this.displayTable=true;
     this.inscriptionEtudiantService.SearchStudent();
  }

  get etudiantOption(): EtudiantOption {
    return this.inscriptionEtudiantService.etudiantOption;
  }

  get etudiantOptions(): Array<EtudiantOption> {
    return this.inscriptionEtudiantService.etudiantOptions;
  }

  set etudiantOption(value: EtudiantOption) {
    this.inscriptionEtudiantService.etudiantOption = value;
  }
  set etudiantOptions(value: Array<EtudiantOption>) {
    this.inscriptionEtudiantService.etudiantOptions = value;
  }

  set dateNvEtud(value: Date) {
    this.inscriptionEtudiantService.dateNvEtud = value;
  }
  get dateNvEtud(): Date {
    return this.inscriptionEtudiantService.dateNvEtud;
  }


    editEtudiant(etudiantOption: EtudiantOption) {
      this.etudiantOption=this.inscriptionEtudiantService.clone(etudiantOption);
      this.dateNvEtud=moment(etudiantOption.etudiant.dateNaissance).toDate();
      this.editDialog = true;
    }

  public delete(selected: EtudiantOption) {
    this.etudiantOption = selected;
    this.inscriptionEtudiantService.deleteEtudiantOption();

  }

  get optSelec(): string {
    return this.inscriptionEtudiantService.optSelec;
  }
  set optSelec(value: string) {
    this.inscriptionEtudiantService.optSelec = value;
  }

  get anneselect(): number {
    return this.inscriptionEtudiantService.anneselect;
  }

  set anneselect(value: number) {
    this.inscriptionEtudiantService.anneselect = value;
  }
//import_export methode
  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {//un gestionnaire pour l'evenement abort (qui se declenche lorsque le chargement de donnee est annuler)

      const bstr: string = e.target.result;
      const data = <any[]>this.inscriptionEtudiantService.importFromFile(bstr);
      const header: string[] = Object.getOwnPropertyNames(new EtudiantOption());
      const x = data.slice(0);

      for (let i = 1; i < x.length; i++) {
        for (let j = 0; j <= x[i].length; j++) {
          //console.log( x[i][j]);
          if (j == 0) {
            this.etudiantOption.etudiant.cne = x[i][j];
          } else if (j == 1){
            this.etudiantOption.etudiant.cin = x[i][j];
          } else if (j == 2){
            this.etudiantOption.etudiant.nom = x[i][j];
          } else if (j == 3) {
            this.etudiantOption.etudiant.prenom = x[i][j];
          } else if (j == 4) {
            console.log(this.SerialDateToJSDate(x[i][j]));
            var response=moment(this.SerialDateToJSDate(x[i][j])).format('YYYY-MM-DD');
            this.etudiantOption.etudiant.dateNaissance=response;
          }

        }
        this.etudiantOption.semestre.code=1;
        this.etudiantOption.anneeUniversitaire.anneeOne=this.anneselect;
        this.etudiantOption.myOption.code=this.optSelec;
        this.etudiantOption.etudiant.dateInscription=moment(new Date()).format('YYYY-MM-DD');
        this.etudiantOptions.push(this.cloneEtudiantOption(this.etudiantOption));
        this.http.post(this.urlEtudiantOption + 'newEtudiant/', this.etudiantOption).subscribe(
            data => {
              if (data == 1) {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Etudiant bien enregistré! ',
                });
              } else {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error !',
                  detail: 'Etudiant avec Cne: '+this.etudiantOption.etudiant.cne+'  deja existe !'
                });
              }

            }, error => {
              console.log(error);
            }
        );
      }

      /*this.etudiantOptions = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return <EtudiantOption>obj;
      })*/


    };
    reader.readAsBinaryString(target.files[0]);

  }

  public cloneEtudiantOption(etudianOption:EtudiantOption):EtudiantOption{
    let  nvEtudiantOption: EtudiantOption = new EtudiantOption();
    nvEtudiantOption.etudiant= this.cloneEtudiant(etudianOption.etudiant);
    nvEtudiantOption.myOption= {...etudianOption.myOption}
    nvEtudiantOption.anneeUniversitaire= {...etudianOption.anneeUniversitaire}
    nvEtudiantOption.semestre= {...etudianOption.semestre}
    nvEtudiantOption.id=etudianOption.id
    return nvEtudiantOption;

  }
  public cloneEtudiant(e:Etudiant){
    let etudiant=new Etudiant();
    etudiant.cne=e.cne
    etudiant.cin=e.cin
    etudiant.nom=e.nom
    etudiant.prenom=e.prenom
    etudiant.dateInscription=e.dateInscription
    etudiant.dateNaissance=e.dateNaissance
    return etudiant;
  }

  private initCol() {
    this.cols = [

      {field: 'cne', header: 'cne'},
      {field: 'cin', header: 'cin'},
      {field: 'nom', header: 'nom'},
      {field: 'prenom', header: 'prenom'},
      {field: 'datenaiss', header: 'datenaiss'},

    ];
  }
  downloadExcel() {

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('etudiants');//hnna mieux ndro smiya en detaille option ...
    const annee=this.anneselect+1
    worksheet.columns = [
      { header: 'cne', key: 'cne', width: 25 },
      { header: 'cin', key: 'cin', width: 25 },
      { header: 'nom', key: 'nom', width: 25 },
      { header: 'prenom', key: 'prenom', width: 25 },
      { header: 'datenaiss', key: 'datenaiss', width: 25 }
    ];
    this.inscriptionEtudiantService.etudiantOptions.forEach(e => {
      worksheet.addRow({cne: e.etudiant.cne,
        cin: e.etudiant.cin,
        nom: e.etudiant.nom,
        prenom: e.etudiant.prenom ,
        datenaiss: e.etudiant.dateNaissance }, 'n');
    });
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Inscription_etudiants_S1_'+this.anneselect+'/'+annee+'_'+this.optSelec+'.xlsx');
    });
  }
  //pdf ici ri pour tester  @ViewChild('htmlData'):ElementRef
  @ViewChild('htmlData') htmlData:ElementRef;
  public openPDF(): void {
    const DATA = document.getElementById('htmlData');
    html2canvas(DATA).then(canvas => {

      const fileWidth = 208;
      const fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('tasssa.pdf');
    });
  }
   SerialDateToJSDate(serialDate) {
    var days = Math.floor(serialDate);
    var hours = Math.floor((serialDate % 1) * 24);
    var minutes = Math.floor((((serialDate % 1) * 24) - hours) * 60)
    return new Date(Date.UTC(0, 0, serialDate, hours-17, minutes));
  }
}
