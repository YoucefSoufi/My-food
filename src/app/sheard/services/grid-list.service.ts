import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridListService {

  constructor() { }


  calcGridColumns(size: number): Observable<number> {
    let taille = this.mediaBreakpoint(size);
    switch (taille) {
      case 'xl': return of(3);
      case 'lg': return of(3);
      case 'md': return of(2);
      case 'sm': return of(1);
      case 'xs': return of(1);
      default: return of(3);
    }
  }


  private mediaBreakpoint(width: number): string {
    if (width < 576) {
      return 'xs';
    } else if (width >= 576 && width < 768) {
      return 'sm';
    } else if (width >= 768 && width < 992) {
      return 'md';
    } else if (width >= 992 && width < 1200) {
      return 'lg';
    } else if (width >= 1200 && width < 1600) {
      return 'xl';
    } else {
      return 'xxl';
    }
  }


}
