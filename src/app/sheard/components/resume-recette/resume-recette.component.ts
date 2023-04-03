import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recette } from '../../models/recette.model';
import { Tag } from '../../models/tag';
import { DonnesRefApiService } from '../../services/donnes-ref-api.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-resume-recette',
  templateUrl: './resume-recette.component.html',
  styleUrls: ['./resume-recette.component.scss']
})





export class ResumeRecetteComponent {

  isPlanned = false;

  @Input() recette: Recette= new Recette();
  
  constructor(private router: Router, private donneesRefService : DonnesRefApiService, private localStorageService : LocalStorageService) { }

  tagsCorrespondant$!: Observable<Tag[]>;


  ngOnInit(): void { 
    this.chercherTagsPourRecette(this.recette);
    this.Planned();
  }

  navigationLien(idRecette: number) {
    console.log(idRecette);
    
    this.router.navigate(['/recettes', idRecette]);
  }


  chercherTagsPourRecette(recette: Recette) {
    this.tagsCorrespondant$ = this.donneesRefService.chercherTags(recette);
  }

  Planned() {

    let recettes = this.localStorageService.getRecettesPlanned();
    console.log(recettes);
    
    this.isPlanned = recettes.filter((recette) => recette.id === this.recette.id).length? true: false;
    console.log(this.isPlanned);
    
  }


  /**
 * Ajoute une recette pour une semaine donnée
 * @param semaine Le numéro de semaine pour lequel ajouter la recette
 * @param idRecette L'ID de la recette à ajouter
 */
  addRecette(recette: Recette,event: Event) {

    event.stopPropagation();
    if(!this.isPlanned){
      console.log("add recette");

      let recettes = this.localStorageService.getRecettesPlanned();
      //  if (!recettes[semaine]) {
      //  recettes[semaine] = [];
      // }
      // recettes[semaine].push(idRecette);
      recettes.push(recette);
      this.localStorageService.majLocalStorageRecettePlanned(recettes);
      this.isPlanned = true;
    }

  }

  deleteRecette(recette: Recette, event: Event) {
    event.stopPropagation();
    console.log("delete recette");
    let recettes = this.localStorageService.getRecettesPlanned();

    const index = recettes.indexOf(recette);
    if (this.isPlanned) {
      recettes.splice(index, 1);
      this.localStorageService.majLocalStorageRecettePlanned(recettes);
    }

    this.isPlanned = false;
  }



}
