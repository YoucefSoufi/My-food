import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Tag } from '../../models/tag';
import { DonnesRefApiService } from '../../services/donnes-ref-api.service';

@Component({
  selector: 'app-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent implements OnInit {

  tags$?: Observable<Tag[]>;

  @Output() selectedTags = new EventEmitter<string[]>();

  _selectedTags: string[] = [];

  constructor(private donnesRefApiService: DonnesRefApiService) { }

  ngOnInit(): void {
    this.tags$ = this.donnesRefApiService.getTags().pipe(
      map(tags => tags.sort((a, b) => b.coeaf - a.coeaf))
    );

  }


  onWheel(event: WheelEvent) {
    const element = event.currentTarget as HTMLElement;
    const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
    element.scrollLeft += delta * 50;
    event.preventDefault();
  }


  selectTag(tagNom: string) {
    const index = this._selectedTags.indexOf(tagNom);
    if (index !== -1) {
      // le tag est déjà sélectionné, donc on le supprime
      this._selectedTags.splice(index, 1);
    } else {
      // le tag n'est pas sélectionné, donc on l'ajoute
      this._selectedTags.push(tagNom);
    }

    // Récupère la liste des tags depuis le service
    this.donnesRefApiService.getTags().subscribe(tags => {
      // Recherche le tag correspondant dans la liste

      const tag = tags.find(t => t.nom === tagNom);

      if (tag && index === -1 ) {
        // Met à jour la propriété coefficient du tag
        tag.coeaf = 2; // Remplacez 42 par la nouvelle valeur souhaitée
      } 
      if (tag && index != -1 ) {
        tag.coeaf = tag.coeaf / 2;
      }

      // Trie la liste de tags selon la nouvelle valeur de coefficient
      this.tags$ = of(tags.sort((a, b) => b.coeaf - a.coeaf));
      this.selectedTags.emit(this._selectedTags);
    });
  }
}