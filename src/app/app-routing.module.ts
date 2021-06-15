import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {MyModulesComponent} from "./view/espaces/espace-admin-note/myModules/myModules.component";
import {FiliereComponent} from "./view/espaces/espace-admin-note/filiere/filiere.component";
import {FiliereListComponent} from "./view/espaces/espace-admin-note/filiere/filiere-list/filiere-list.component";
import {NoteEtudiantModule} from "./controller/model/note-etudiant-module.model";
import {NoteEtudiantModuleComponent} from "./view/espaces/espace-coordonnateur-module/coodronnateurModule/note-etudiant-module/note-etudiant-module.component";
import {NoteEtudiantRatComponent} from "./view/espaces/espace-coordonnateur-module/coodronnateurModule/note-etudiant-rat/note-etudiant-rat.component";
import {InscriptionNouveauEtudiantComponent} from "./view/espaces/espace-admin-note/inscription-nouveau-etudiant/inscription-nouveau-etudiant.component";
import {InscriptionAncienEtudiantComponent} from "./view/espaces/espace-admin-note/inscription-ancien-etudiant/inscription-ancien-etudiant.component";
import {NoteEtudiantSemestreComponent} from "./view/espaces/espace-admin-note/note-etudiant-semestre/note-etudiant-semestre.component";
import {PonderationAffectComponent} from "./view/espaces/espace-admin-note/ponderation/ponderation-affect/ponderation-affect.component";
import {EtudiantComponent} from "./view/espaces/espace-etudiant/etudiant/etudiant.component";
import {AbsenceEditComponent} from "./view/espaces/espace-professeur/absence-edit/absence-edit.component";
import {AbsenceEtudiantComponent} from "./view/espaces/espace-etudiant/etudiant/absence-etudiant/absence-etudiant.component";
import {TestpdfComponent} from "./view/testpdf/testpdf.component";
import {NoteSemestreOneComponent} from "./view/espaces/espace-admin-note/releve-admin/note-semestre-one/note-semestre-one.component";
import {ImageUploadComponent} from "./view/test/image-upload/image-upload.component";
import {ConsultationAbsencesComponent} from "./view/espaces/espace-admin-absence/consultation-absences/consultation-absences.component";
import {LoginComponent} from "./view/login/login.component";
import {AccueilComponent} from "./view/accueil/accueil.component";
import {EspacesComponent} from "./view/espaces/espaces.component";
import {EspaceEtudiantComponent} from "./view/espaces/espace-etudiant/espace-etudiant.component";
import {DetailNoteComponent} from "./view/espaces/espace-admin-absence/detail-note/detail-note.component";
import {ErreurNoteComponent} from "./view/espaces/espace-etudiant/etudiant/erreur-note/erreur-note.component";
import {EspaceAdminNoteComponent} from "./view/espaces/espace-admin-note/espace-admin-note.component";
import {EspaceAdminAbsenceComponent} from "./view/espaces/espace-admin-absence/espace-admin-absence.component";
import {EspaceProfesseurComponent} from "./view/espaces/espace-professeur/espace-professeur.component";
import {EspaceCoordonnateurModuleComponent} from "./view/espaces/espace-coordonnateur-module/espace-coordonnateur-module.component";
import {ReleveEtudiantComponent} from "./view/espaces/espace-etudiant/releve-etudiant/releve-etudiant.component";
import {ReleveAdminComponent} from "./view/espaces/espace-admin-note/releve-admin/releve-admin.component";
import {ReleveComponent} from "./view/espaces/espace-etudiant/releve-etudiant/releve/releve.component";
import {ModuleOrAffectationComponent} from "./view/espaces/espace-admin-note/module-or-affectation/module-or-affectation.component";
import {ChoixCoordonnateurComponent} from "./view/espaces/espace-coordonnateur-module/choix-coordonnateur/choix-coordonnateur.component";
import {EtudiantExcluComponent} from "./view/espaces/espace-admin-absence/etudiant-exclu/etudiant-exclu.component";
import {ListeAbsenceComponent} from "./view/liste-absence/liste-absence.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component:AccueilComponent},
                    {path: 'accueil/espace', component:EspacesComponent},
                    {path: 'view/myModule', component: MyModulesComponent},
                    {path: 'view/filiere', component: FiliereComponent},
                    {path: 'view/noteEtudiantModule', component: NoteEtudiantModuleComponent},
                    {path: 'view/noteEtudiantModuleRat', component: NoteEtudiantRatComponent},
                    {path: 'view/inscriptionNouveauEtudiant', component: InscriptionNouveauEtudiantComponent},
                    {path: 'view/inscriptionAncienEtudiant', component: InscriptionAncienEtudiantComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'view/note-etudiant-semestre', component: NoteEtudiantSemestreComponent},
                    {path: 'view/ponderation', component: PonderationAffectComponent},
                    {path: 'view/etudiant', component: EtudiantComponent},
                    {path: 'view/absence', component: AbsenceEditComponent},
                    {path: 'view/absenceEtudiant', component: AbsenceEtudiantComponent},
                    {path: 'view/test', component: TestpdfComponent},
                    {path: 'view/imageUpload', component: ImageUploadComponent},
                    {path: 'view/consultation', component: ConsultationAbsencesComponent},
                    {path: 'view/login', component: LoginComponent},
                    {path: 'view/note-semestre-one', component: NoteSemestreOneComponent},
                    {path: 'espaces/etudiant', component: EspaceEtudiantComponent},
                    {path: 'view/detail-note', component: DetailNoteComponent},
                    {path: 'view/erreurNote', component: ErreurNoteComponent},
                    {path: 'view/AdminNoteNote', component:EspaceAdminNoteComponent},
                    {path: 'view/AdminAbsence', component:EspaceAdminAbsenceComponent},
                    {path: 'view/professeur', component:EspaceProfesseurComponent},
                    {path: 'view/coordonatteurModule', component:EspaceCoordonnateurModuleComponent},
                    {path: 'view/releveEtudiant', component:ReleveEtudiantComponent},
                    {path: 'view/releveAdmin', component:ReleveAdminComponent},
                    {path: 'view/releve', component:ReleveComponent},
                    {path: 'view/ModuleOrAffecation', component:ModuleOrAffectationComponent},
                    {path: 'view/choixCor', component:ChoixCoordonnateurComponent},
                    {path: 'view/etudiantExcluts', component:EtudiantExcluComponent},
                    {path: 'view/lis', component:ListeAbsenceComponent},

                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: '404', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
