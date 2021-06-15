import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';
import {AppCodeModule} from './app.code.component'
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppRightMenuComponent} from './app.right-menu.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';

import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import {MenuService} from './app.menu.service';
import {CustomerService} from './demo/service/customerservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';
import {IconService} from './demo/service/iconservice';
import {MyModulesComponent} from "./view/espaces/espace-admin-note/myModules/myModules.component";
import {MyModuleListComponent} from "./view/espaces/espace-admin-note/myModules/myModule-list/myModule-list.component";
import {MyModuleEditComponent} from "./view/espaces/espace-admin-note/myModules/myModule-edit/myModule-edit.component";
import {MyModuleViewComponent} from "./view/espaces/espace-admin-note/myModules/myModule-view/myModule-view.component";
import {MyModuleCreateComponent} from "./view/espaces/espace-admin-note/myModules/myModule-create/myModule-create.component";
import { FiliereComponent } from './view/espaces/espace-admin-note/filiere/filiere.component';
import { FiliereListComponent } from './view/espaces/espace-admin-note/filiere/filiere-list/filiere-list.component';
import { FiliereCreateComponent } from './view/espaces/espace-admin-note/filiere/filiere-create/filiere-create.component';
import {ConfirmationService, MessageService} from "primeng/api";
import { MyOptionComponent } from './view/espaces/espace-admin-note/my-option/my-option.component';
import { MyOptionListeComponent } from './view/espaces/espace-admin-note/my-option/my-option-liste/my-option-liste.component';
import { MyOptionCreateComponent } from './view/espaces/espace-admin-note/my-option/my-option-create/my-option-create.component';
import { NoteEtudiantModuleComponent } from './view/espaces/espace-coordonnateur-module/coodronnateurModule/note-etudiant-module/note-etudiant-module.component';
import { NoteEtudiantModuleEditComponent } from './view/espaces/espace-coordonnateur-module/coodronnateurModule/note-etudiant-module/note-etudiant-module-edit/note-etudiant-module-edit.component';
import { NoteEtudiantRatComponent } from './view/espaces/espace-coordonnateur-module/coodronnateurModule/note-etudiant-rat/note-etudiant-rat.component';
import { NoteEtudiantRatEditComponent } from './view/espaces/espace-coordonnateur-module/coodronnateurModule/note-etudiant-rat/note-etudiant-rat-edit/note-etudiant-rat-edit.component';
import { InscriptionNouveauEtudiantComponent } from './view/espaces/espace-admin-note/inscription-nouveau-etudiant/inscription-nouveau-etudiant.component';
import { InscriptionNouveauCreateComponent } from './view/espaces/espace-admin-note/inscription-nouveau-etudiant/inscription-nouveau-create/inscription-nouveau-create.component';
import { InscriptionAncienEtudiantComponent } from './view/espaces/espace-admin-note/inscription-ancien-etudiant/inscription-ancien-etudiant.component';
import { InscriptionNouveauEditComponent } from './view/espaces/espace-admin-note/inscription-nouveau-etudiant/inscription-nouveau-edit/inscription-nouveau-edit.component';
import { InscriptionAncienEditComponent } from './view/espaces/espace-admin-note/inscription-ancien-etudiant/inscription-ancien-edit/inscription-ancien-edit.component';
import { ModuleSemestreOptionComponent } from './view/espaces/espace-admin-note/module-semestre-option/module-semestre-option.component';
import { ModuleSemestreOptionCreateComponent } from './view/espaces/espace-admin-note/module-semestre-option/module-semestre-option-create/module-semestre-option-create.component';
import { ModuleSemestreOptionListComponent } from './view/espaces/espace-admin-note/module-semestre-option/module-semestre-option-list/module-semestre-option-list.component';
import {PonderationAffectComponent} from "./view/espaces/espace-admin-note/ponderation/ponderation-affect/ponderation-affect.component";
import {PonderationCreateComponent} from "./view/espaces/espace-admin-note/ponderation/ponderation-create/ponderation-create.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {NoteEtudiantSemestreComponent} from "./view/espaces/espace-admin-note/note-etudiant-semestre/note-etudiant-semestre.component";
import {NoteEtudiantSemestreModulesComponent} from "./view/espaces/espace-admin-note/note-etudiant-semestre/note-etudiant-semestre-modules/note-etudiant-semestre-modules.component";
import { EtudiantComponent } from './view/espaces/espace-etudiant/etudiant/etudiant.component';
import { NoteSemestreOneComponent } from './view/espaces/espace-admin-note/releve-admin/note-semestre-one/note-semestre-one.component';
import { AbsenceEditComponent } from './view/espaces/espace-professeur/absence-edit/absence-edit.component';
import { ChoisirParamComponent } from './view/espaces/espace-professeur/absence-edit/choisir-param/choisir-param.component';
import { AbsenceEtudiantComponent } from './view/espaces/espace-etudiant/etudiant/absence-etudiant/absence-etudiant.component';
import {TestpdfComponent} from "./view/testpdf/testpdf.component";
import { ImageUploadComponent } from './view/test/image-upload/image-upload.component';
import {SeanceCreateComponent} from "./view/espaces/espace-admin-note/seance/seance-create/seance-create.component";
import {ConsultationAbsencesComponent} from "./view/espaces/espace-admin-absence/consultation-absences/consultation-absences.component";
import {SeanceEditComponent} from "./view/espaces/espace-admin-note/seance/seance-edit/seance-edit.component";
import {SeanceListComponent} from "./view/espaces/espace-admin-note/seance/seance-list/seance-list.component";
import { JustificationComponent } from './view/espaces/espace-admin-absence/consultation-absences/justification/justification.component';
import { LoginComponent } from './view/login/login.component';
import {AccueilComponent} from "./view/accueil/accueil.component";
import { EspacesComponent } from './view/espaces/espaces.component';
import { EspaceEtudiantComponent } from './view/espaces/espace-etudiant/espace-etudiant.component';
import { DetailNoteComponent } from './view/espaces/espace-admin-absence/detail-note/detail-note.component';
import { ErreurNoteComponent } from './view/espaces/espace-etudiant/etudiant/erreur-note/erreur-note.component';
import { EspaceProfesseurComponent } from './view/espaces/espace-professeur/espace-professeur.component';
import { EspaceAdminNoteComponent } from './view/espaces/espace-admin-note/espace-admin-note.component';
import { EspaceAdminAbsenceComponent } from './view/espaces/espace-admin-absence/espace-admin-absence.component';
import { EspaceCoordonnateurModuleComponent } from './view/espaces/espace-coordonnateur-module/espace-coordonnateur-module.component';
import { ReleveEtudiantComponent } from './view/espaces/espace-etudiant/releve-etudiant/releve-etudiant.component';
import { ReleveComponent } from './view/espaces/espace-etudiant/releve-etudiant/releve/releve.component';
import { ReleveAdminComponent } from './view/espaces/espace-admin-note/releve-admin/releve-admin.component';
import { ModuleOrAffectationComponent } from './view/espaces/espace-admin-note/module-or-affectation/module-or-affectation.component';
import { ChoixCoordonnateurComponent } from './view/espaces/espace-coordonnateur-module/choix-coordonnateur/choix-coordonnateur.component';
import { EtudiantExcluComponent } from './view/espaces/espace-admin-absence/etudiant-exclu/etudiant-exclu.component';
import { ListeAbsenceComponent } from './view/liste-absence/liste-absence.component';
import {PonderationComponent} from "./view/espaces/espace-admin-note/ponderation/ponderation.component";
import {SeanceComponent} from "./view/espaces/espace-admin-note/seance/seance.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AppCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppTimelineDemoComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppLoginComponent,
        MyModulesComponent,
        MyModulesComponent,
        MyModuleListComponent,
        MyModuleEditComponent,
        MyModuleViewComponent,
        MyModuleCreateComponent,
        FiliereComponent,
        FiliereListComponent,
        FiliereCreateComponent,
        MyOptionComponent,
        MyOptionListeComponent,
        MyOptionCreateComponent,
        NoteEtudiantModuleComponent,
        NoteEtudiantModuleEditComponent,
        NoteEtudiantRatComponent,
        NoteEtudiantRatEditComponent,
        InscriptionNouveauEtudiantComponent,
        InscriptionNouveauCreateComponent,
        InscriptionAncienEtudiantComponent,
        InscriptionNouveauEditComponent,
        InscriptionAncienEditComponent,
        ModuleSemestreOptionComponent,
        ModuleSemestreOptionCreateComponent,
        ModuleSemestreOptionListComponent,
        PonderationAffectComponent,
        PonderationCreateComponent,
        NoteEtudiantSemestreComponent,
        NoteEtudiantSemestreModulesComponent,
        EtudiantComponent,
        NoteSemestreOneComponent,
        AbsenceEditComponent,
        ChoisirParamComponent,
        AbsenceEtudiantComponent,
        TestpdfComponent,
        ImageUploadComponent,
        SeanceCreateComponent,
        SeanceListComponent,
        ConsultationAbsencesComponent,
        SeanceEditComponent,
        JustificationComponent,
        LoginComponent,
        AccueilComponent,
        EspacesComponent,
        EspaceEtudiantComponent,
        DetailNoteComponent,
        ErreurNoteComponent,
        EspaceProfesseurComponent,
        EspaceAdminNoteComponent,
        EspaceAdminAbsenceComponent,
        EspaceCoordonnateurModuleComponent,
        ReleveEtudiantComponent,
        ReleveComponent,
        ReleveAdminComponent,
        ModuleOrAffectationComponent,
        ChoixCoordonnateurComponent,
        EtudiantExcluComponent,
        ListeAbsenceComponent,
        PonderationComponent,
        SeanceComponent,


    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService,ConfirmationService,MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
