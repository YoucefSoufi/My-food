import { Component, Input } from '@angular/core';
import { Recette } from '../../models/recette.model';

@Component({
  selector: 'app-recette-planification-resume',
  templateUrl: './recette-planification-resume.component.html',
  styleUrls: ['./recette-planification-resume.component.scss']
})
export class RecettePlanificationResumeComponent {

  @Input() recette: Recette = new Recette();

  constructor(){}
  

}
