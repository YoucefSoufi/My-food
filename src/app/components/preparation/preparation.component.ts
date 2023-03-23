import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recette } from 'src/app/sheard/models/recette.model';
import { RecettesApiService } from 'src/app/sheard/services/recettes-api.service';
@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreparationComponent implements OnInit {
  myParam: string = '';
  loading = true;
  error = false;
  startPreparation = false;
  currentStep = 0;

  constructor(private router: Router, private activedRoute: ActivatedRoute, private recetteService: RecettesApiService) { }

  recette$: Observable<Recette> | undefined;

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(params => {
      const idRecette = params.get('idrecette');
      if (idRecette !== null) {
        this.myParam = idRecette;
        console.log(this.myParam + "route");
        this.recette$ = this.recetteService.getRecetteById(this.myParam)
      }
    });

    this.recette$?.subscribe((result) => {
      console.log(result);
    },
      (error) => {
        this.loading = false;
        this.error = true;
        console.error('Une erreur s\'est produite:', error);
      }, () => { this.loading = false;})
  }



}
