import { Component, OnInit } from '@angular/core';
import {NoteEtudiantModule} from "../../controller/model/note-etudiant-module.model";
import {Absence} from "../../controller/model/absence.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-liste-absence',
  templateUrl: './liste-absence.component.html',
  styleUrls: ['./liste-absence.component.scss']
})
export class ListeAbsenceComponent implements OnInit {

  constructor(private http:HttpClient) { }
  private _urlAbsence=environment.baseUrl+'absence/';
  ngOnInit(): void {
  }
  private filterEtudiant(data: Array<NoteEtudiantModule>) {
    for(let noteEtudiantModule of data){
      alert(this._urlAbsence+'etudiant/cne/'+noteEtudiantModule.etudiant.cne+'/seance/moduleSemestreOption/code/RadiologieIntroductionalaprofessionSageFemme1')
      this.http.get<Array<Absence>>(this._urlAbsence+'etudiant/cne/'+noteEtudiantModule.etudiant.cne+'/seance/moduleSemestreOption/code/RadiologieIntroductionalaprofessionSageFemme1').subscribe(
          data => {
            alert(data.length)
              console.log(data)
            /*if(data.length<3)
                this.notesEtudiantModule.push(noteEtudiantModule);
            else
                this.etudiantAbsente.push(noteEtudiantModule.etudiant);
            console.log('hada notes')
            console.log(this.notesEtudiantModule)
            console.log('absences')
            console.log(this.etudiantAbsente)*/
          }, error => {
            console.log(error);
          }
      );

    }
  }
  private urlBase='http://localhost:8036/';
  private URLNoteEtudModule: string='ispits-project/note-etudiant-modul';
  serachEtudiant() {
    this.http.get<Array<NoteEtudiantModule>>(this.urlBase + this.URLNoteEtudModule+'/module-semestre-option/codeModule/RadiologieIntroductionalaprofessionSageFemme1').subscribe(
        data => {
          this.filterEtudiant(data);
        }, error => {
          console.log(error);
        }
    );
  }

}
