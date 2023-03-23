import { Component, Input } from '@angular/core';
import { Etape } from '../../models/etape';

@Component({
  selector: 'app-etape-preparation',
  templateUrl: './etape-preparation.component.html',
  styleUrls: ['./etape-preparation.component.scss']
})
export class EtapePreparationComponent {

  @Input() etape:Etape = new Etape();

  constructor(){

  }

  
}
