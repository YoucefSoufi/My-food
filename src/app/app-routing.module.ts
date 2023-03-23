import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './components/planning/planning.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { RecettesComponent } from './components/recettes/recettes.component';

const routes: Routes = [
  { path: '', component: RecettesComponent },
  { path: 'recettes/:idrecette', component: PreparationComponent},
  { path: 'recettes', component: RecettesComponent },
  { path: 'planning', component: PlanningComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
