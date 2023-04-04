import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, catchError, distinctUntilChanged, Observable, of, Subject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { Filtre } from 'src/app/sheard/models/filtre';
import { Recette } from 'src/app/sheard/models/recette.model';
import { GridListService } from 'src/app/sheard/services/grid-list.service';
import { RecettesApiService } from 'src/app/sheard/services/recettes-api.service';
import { ScrollService } from 'src/app/sheard/services/scroll.service';
import { SubscriptionUtilService } from 'src/app/sheard/services/subscription-util.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit, OnDestroy {

  
  recettes$!: Observable<Recette[]>;
  colsNumber$!: Observable<number>;

  loading = true;
  error = false;
  private recettesSubject = new BehaviorSubject<Recette[]>([]);
  private getRecetteSubject = new BehaviorSubject<Filtre>(new Filtre());
  private destroy$ = new Subject();

  _filtre: Filtre = new Filtre();

  prevScrollpos = window.pageYOffset;

  @ViewChild('parentDiv') parentDiv!: ElementRef;

  constructor(
    private gridlistSerice: GridListService,
    private recettesService: RecettesApiService,
    private scrollService: ScrollService,
    private subscription: SubscriptionUtilService
  ) {
  }

  ngOnInit(): void {
    
    this.subscription.register(this.getRecetteSubject.subscribe(() => {

      this.recettes$ = this.recettesService.getRecettes(this._filtre).pipe(        
        tap((recettes: Recette[]) => {
          this.recettesSubject.next([...this.recettesSubject.value, ...recettes]);
          this.loading = false;
        }),
        catchError(() => {
          this.loading = false;
          this.error = true;
          return of([]);
        }),
        shareReplay(1)
      );
    }));


    this.colsNumber$ = this.gridlistSerice.calcGridColumns(window.innerWidth).pipe(
      distinctUntilChanged()
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    console.log("resize");
    
    this.colsNumber$ = this.gridlistSerice.calcGridColumns(window.innerWidth).pipe(
      distinctUntilChanged()
    );
  }

  
  nextpage(): void {
    if (!this.loading) {
      this.loading = true;
      this.error = false;
      this._filtre.currentPage++;
      this.loadRecettes();
    }
  }


  private loadRecettes() {
    this.recettes$ = this.recettesSubject.asObservable();
    this.subscription.register(this.recettesService.getRecettes(this._filtre).pipe(
      tap((recettes: Recette[]) => {
        this.recettesSubject.next([...this.recettesSubject.value, ...recettes]);
        this.loading = false;
      }),
      catchError(() => {
        this.loading = false;
        this.error = true;
        return of([]);
      })
    ).subscribe());
  }

  miseAjourFiltre(tags: string[]) {
    this._filtre.tags = tags;
    this._filtre.currentPage = 1;
    this.loading = true;
    this.error = false;
    this.recettesSubject.next([]);
    this.getRecetteSubject.next(this._filtre);

  }


  miseAjourSearch(search: string) {
    this._filtre.recherche = search;
    this._filtre.currentPage = 1;
    this.loading = true;
    this.error = false;
    this.getRecetteSubject.next(this._filtre);
  }

  ngOnDestroy(): void {

    //window.removeEventListener('scroll', this.onScroll.bind(this), true);
    console.log("destroy");
    this.recettesSubject.unsubscribe();
    this.destroy$.next(0);
    this.destroy$.complete();
    this.subscription.destroy();
  }

  trackByFn(index: number, recette: Recette) {
    return recette.id; // ou toute autre clé unique pour la recette
  }


  reload() {
    this.error = false;
    this.loadRecettes();
  }
}