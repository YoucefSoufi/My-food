import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { ScrollService } from './sheard/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  public title = 'my-food-project';
  isDrawerOpen = false;
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  isToolbarHidden = false;
  prevScrollpos = window.pageYOffset;

  private previousScrollPosition = 0;

  toolBarClass: string = '';
  contenuClass: string = 'up-conetenu'; 
  topContainer: string = '';

  constructor(private scrollService: ScrollService) {

  }
  
  ngAfterViewInit() {
  }
  

  toggleDrawer() {
    console.log("Click");
    
    this.drawer.toggle();
  }
  
  @HostListener('window:scroll', ['$event']) 
  onScroll(event : Event) {    
    this.toolBarClass = this.scrollService.directionScroll(this.previousScrollPosition, window.scrollY);
    this.contenuClass = this.toolBarClass == 'up' ? 'up-conetenu' : 'down-conetenu'
    this.topContainer = this.toolBarClass === 'top' ? 'top-container' : '';
    this.previousScrollPosition = window.scrollY;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this), true);
  }
}
