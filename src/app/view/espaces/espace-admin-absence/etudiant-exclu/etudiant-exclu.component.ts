import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Etudiant} from "../../../../controller/model/etudiant.model";
import {NoteEtudiantModuleService} from "../../../../controller/service/note-etudiant-module.service";
import {NoteEtudiantSemestreService} from "../../../../controller/service/note-etudiant-semestre.service";
import {NoteEtudiantModule} from "../../../../controller/model/note-etudiant-module.model";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

@Component({
  selector: 'app-etudiant-exclu',
  templateUrl: './etudiant-exclu.component.html',
  styleUrls: ['./etudiant-exclu.component.scss']
  })

export class EtudiantExcluComponent implements OnInit {

  constructor(private noteEtudiantSemestreService:NoteEtudiantSemestreService,private noteEtudiantModuleService:NoteEtudiantModuleService) { }

  get etudiantAbsente(): Array<NoteEtudiantModule> {
    return this.noteEtudiantModuleService.etudiantAbsente;
  }
  /*ngOnInit(): void {
  }*/

  get semestreSelct(): number {
    return this.noteEtudiantSemestreService.semestreSelct;
  }

  set semestreSelct(value: number) {
    this.noteEtudiantSemestreService.semestreSelct = value;
  }
  get notesEtudiantModules(): Array<NoteEtudiantModule> {
    return this.noteEtudiantSemestreService.notesEtudiantModules;
  }

  set notesEtudiantModules(value: Array<NoteEtudiantModule>) {
    this.noteEtudiantSemestreService.notesEtudiantModules = value;
  }
  get notesEtudiantModules1(): Array<NoteEtudiantModule> {
    return this.noteEtudiantSemestreService.notesEtudiantModules1;
  }

  set notesEtudiantModules1(value: Array<NoteEtudiantModule>) {
    this.noteEtudiantSemestreService.notesEtudiantModules1 = value;
  }
  get notesEtudiantModules2(): Array<NoteEtudiantModule> {
    return this.noteEtudiantSemestreService.notesEtudiantModules2;
  }

  set notesEtudiantModules2(value: Array<NoteEtudiantModule>) {
    this.noteEtudiantSemestreService.notesEtudiantModules2 = value;
  }

  //pdf ici ri pour tester  @ViewChild('htmlData'):ElementRef
  @ViewChild('htmlData',{static : false}) htmlData:ElementRef;
  public openPDF():void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('PV_Semestre');
    });
  }




  cols: any[];

  exportColumns: any[];

  ngOnInit() {

    this.cols = [
      { field: 'nomModule', header: 'nomModule' },
      { field: 'notModule', header: 'notModule' },
      { field: 'resultat', header: 'resultat' },
      { field: 'annee', header: 'annee' }
    ];

    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }


  exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const jsPDF = require('jspdf');
        require('jspdf-autotable');
        const doc = new jsPDF.default(0,0);
        doc.autoTable(this.exportColumns, this.notesEtudiantModules);
        doc.save('products.pdf');
      })
    })
  }



  public gneratePDF (){
    var data = document.getElementById('vovo');
    html2canvas(data).then(canvas =>{
      var imgWidth = 220;//195
      var pageHight= 250;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL =canvas.toDataURL('image/png')
      let pdf = new jsPDF('p','mm','a3');//a2
      var position = 0;
      pdf.addImage(contentDataURL,'PNG',0,position,imgWidth,imgHeight)
      pdf.save('PV_etudiant');
    });
  }



}
