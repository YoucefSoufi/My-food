import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loadin',
  templateUrl: './loadin.component.html',
  styleUrls: ['./loadin.component.scss']
})
export class LoadinComponent {

  @Input() loading:boolean = true;
  @Input() error:boolean = false;

  constructor(private activeRouter: ActivatedRoute){}

  reload(){
    this.loading = true;
    this.error = false;
    this.activeRouter.paramMap.subscribe(() => {
      // navigate to the current URL to reload the page
      window.location.href = window.location.href;
    });
  }
}
