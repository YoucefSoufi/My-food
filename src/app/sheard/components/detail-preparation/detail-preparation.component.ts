import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../../models/recette.model';
import { Tag } from '../../models/tag';
import { DonnesRefApiService } from '../../services/donnes-ref-api.service';

@Component({
  selector: 'app-detail-preparation',
  templateUrl: './detail-preparation.component.html',
  styleUrls: ['./detail-preparation.component.scss']
})
export class DetailPreparationComponent {

  @Input() recette : Recette = new Recette();

  tagsCorrespondant$!: Observable<Tag[]>;


  constructor(private donneesRefService: DonnesRefApiService){

  }
  ngOnInit(): void {
    this.chercherTagsPourRecette(this.recette);
  }

  chercherTagsPourRecette(recette: Recette) {
    this.tagsCorrespondant$ = this.donneesRefService.chercherTags(recette);
  }

}
