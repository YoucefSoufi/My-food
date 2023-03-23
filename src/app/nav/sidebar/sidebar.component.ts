import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() toggle = new EventEmitter<null>();

  constructor(private router: Router) {

  }

  navigation = [{ titre: 'Recettes', lien: '/recettes', icon: 'restaurant' }, { titre: 'Planning', lien: '/planning', icon: 'date_range' }];
  ngOnInit(): void {    
  }

  navigationLien(lien: string) {
    this.toggle.emit(null);
    this.router.navigateByUrl(lien);
  }


  ngAfterViewInit() {

  }

}
