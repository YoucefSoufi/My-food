import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  isSearchOpen = false;
  toggleDrawer: boolean = false;

  @Output() toggle = new EventEmitter<boolean>();
  @Output() recherche = new EventEmitter<string>();

  @ViewChild('search') search! : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawerEmit() {
    this.toggleDrawer = !this.toggleDrawer;
    this.toggle.emit(this.toggleDrawer);
  }


  toggleSearch(recherche: string) {
    this.recherche.emit(recherche)
  }

}
