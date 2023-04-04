import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { distinctUntilChanged, Observable } from 'rxjs';
import { Recette } from 'src/app/sheard/models/recette.model';
import { GridListService } from 'src/app/sheard/services/grid-list.service';
import { LocalStorageService } from 'src/app/sheard/services/local-storage.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {

  recettes!: Recette[];
  colsNumber$!: Observable<number>;
  startPosition: number = 0;
  dragPosition = { x: 0, y: 0 };
  optionClass: string = '';

  ngOnInit(): void {
    console.log("init plannig");
    this.recettes = [...this.localStoragService.getRecettesPlanned()]
    this.recettes = this.recettes.map(recette => ({ ...recette, class: 'transitionOption' }));

  }

  ngOnDestroy(): void {
    console.log("destroy plannig");

  }


  constructor(
    private gridlistSerice: GridListService,
    private localStoragService: LocalStorageService
  ) {

  }


  @HostListener('window:resize', ['$event'])
  onResize(): void {
    console.log("resize");

    this.colsNumber$ = this.gridlistSerice.calcGridColumns(window.innerWidth).pipe(
      distinctUntilChanged()
    );
  }




  drop(event: any, recette: Recette) {
    recette.class = 'transitionOption';
    let showOption = this.startPosition > event.distance.x ? true : false;
    if (event.distance.x < -30 && event.distance.x > -200 && showOption) {
      console.log(recette.id);
      recette.class = 'transitionOption showOptions';

    } else if (event.distance.x < -30 && event.distance.x > -500 && !showOption) {
      this.dragPosition = { x: - 0, y: 0 };
      console.log(this.dragPosition);
    } else {
      this.dragPosition = { x: - 300, y: 0 };
      console.log(this.dragPosition);
    }
    this.startPosition = event.distance.x
    

    console.log(recette.class);


  //    recette.class?.replace('animated','');
  }

  dragMoved(event: CdkDragMove, recette: Recette) {

    recette.class='';


  }


  transition(recette: Recette) {
    recette.class = 'transitionOption showOptions';
  }
}
