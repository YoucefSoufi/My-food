import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Recette } from '../models/recette.model';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class DonnesRefApiService implements OnDestroy {

  private subscription = new Subscription();

  tags: Tag[] = [
    { nom: 'Desserts', color: '#FE938C', coeaf: 0.5, icon: 'fa-ice-cream' },
    { nom: 'Végétarien', color: '#A1C181', coeaf: 0.5, icon: 'fa-leaf' },
    { nom: 'Végan', color: '#5D4C46', coeaf: 0.5, icon: 'fa-carrot' },
    { nom: 'Sans gluten', color: '#5E8C6A', coeaf: 0.5, icon: 'fa-bread-slice' },
    { nom: 'Sans lactose', color: '#B2B09B', coeaf: 0.5, icon: 'fa-cheese' },
    { nom: 'Facile', color: '#F3BDA1', coeaf: 0.5, icon: 'fa-thumbs-up' },
    { nom: 'Difficile', color: '#6B6A6B', coeaf: 0.5, icon: 'fa-thumbs-up' },
    { nom: 'Rapide', color: '#F2D0A4', coeaf: 0.5, icon: 'fa-stopwatch' },
    { nom: 'Familial', color: '#569E81', coeaf: 0.5, icon: 'fa-users' }
  ];

  constructor() {
    this.chargerTags();
    console.log("recharge service donneeRef");
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log("ngOnDestroy service donneeRef");
  }



  getTags(): Observable<Tag[]> {
    return of(this.tags);
  }

  private chargerTags(): void {
    this.subscription.add(
      this.getTags().subscribe(tags => this.tags = tags)
    );
  }

  chercherTags(recette: Recette): Observable<Tag[]> {
    const tagsCorrespondants = this.tags.filter(tag => recette.tags.includes(tag.nom));
    return of(tagsCorrespondants);
  }


  
}
