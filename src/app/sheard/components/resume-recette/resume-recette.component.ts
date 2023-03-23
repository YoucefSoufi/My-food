import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recette } from '../../models/recette.model';
import { Tag } from '../../models/tag';
import { DonnesRefApiService } from '../../services/donnes-ref-api.service';

@Component({
  selector: 'app-resume-recette',
  templateUrl: './resume-recette.component.html',
  styleUrls: ['./resume-recette.component.scss']
})





export class ResumeRecetteComponent {

  @Input() recette: Recette= new Recette();
  
  constructor(private router: Router, private donneesRefService : DonnesRefApiService) { }

  tagsCorrespondant$!: Observable<Tag[]>;


  ngOnInit(): void { 
    this.chercherTagsPourRecette(this.recette);
  }

  navigationLien(idRecette: number) {
    console.log(idRecette);
    
    this.router.navigate(['/recettes', idRecette]);
  }


  chercherTagsPourRecette(recette: Recette) {
    this.tagsCorrespondant$ = this.donneesRefService.chercherTags(recette);
  }


}
