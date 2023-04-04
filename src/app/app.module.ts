import { CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningComponent } from './components/planning/planning.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { RecettesComponent } from './components/recettes/recettes.component';
import { FooterComponent } from './nav/footer/footer.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { DetailPreparationComponent } from './sheard/components/detail-preparation/detail-preparation.component';
import { EtapePreparationComponent } from './sheard/components/etape-preparation/etape-preparation.component';
import { LoadinComponent } from './sheard/components/loadin/loadin.component';
import { ResumeRecetteComponent } from './sheard/components/resume-recette/resume-recette.component';
import { SearchTagFiltreComponent } from './sheard/components/search-tag-filtre/search-tag-filtre.component';
import { SearchComponent } from './sheard/components/search/search.component';
import { TagComponent } from './sheard/components/tag/tag.component';
import { TagsFilterComponent } from './sheard/components/tags-filter/tags-filter.component';
import { RecettePlanificationResumeComponent } from './sheard/components/recette-planification-resume/recette-planification-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    RecettesComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    PlanningComponent,
    ResumeRecetteComponent,
    PreparationComponent,
    LoadinComponent,
    EtapePreparationComponent,
    DetailPreparationComponent,
    TagsFilterComponent,
    TagComponent,
    SearchComponent,
    SearchTagFiltreComponent,
    RecettePlanificationResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule, 
    MatGridListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDividerModule,
    ScrollingModule,
    MatSelectModule,
    MatFormFieldModule,  
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [CdkScrollable],
  bootstrap: [AppComponent]
})
export class AppModule { }
