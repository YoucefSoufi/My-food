import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  seuilbottom : number = 50;

  directionScroll(previousScrollPosition: number, currentScrollPosition: number): string {
    return  currentScrollPosition > previousScrollPosition ? 'down' : 'up';
  }


  isBottom(visibleHeight: number, totalHeight: number, currentScrollPosition: number): boolean{
    const distanceToBottom = totalHeight - (currentScrollPosition + visibleHeight);
    return distanceToBottom < this.seuilbottom ? true : false
  }
}
