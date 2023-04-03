import { Injectable } from '@angular/core';
import { Recette } from '../models/recette.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private localStorage = window.localStorage;
  private recetteStorageKey = 'recettesPlanned';

  getRecettesPlanned(): Recette[] {
    const storageValue = this.localStorage.getItem(this.recetteStorageKey);
    let recettes = [];
    if (storageValue) {
      recettes = JSON.parse(storageValue);
    }
    return recettes;
  }


  majLocalStorageRecettePlanned(recettes: {}) {
    this.localStorage.setItem(this.recetteStorageKey, JSON.stringify(recettes));
  }
}
