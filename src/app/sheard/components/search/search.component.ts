import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  inputClass='hide-input';
  showbackground= false;
  background = '';
  searchWidth ='search-width-none';

  constructor(){ }

  searchClick(){
    this.inversValue();
  }

  private inversValue() {
    this.inputClass = this.inputClass === 'show-input' ? 'hide-input' : 'show-input';
    this.background = this.background === 'background-shadow' ? '' : 'background-shadow';
    this.searchWidth = this.searchWidth === 'search-width' ? 'search-width-none' : 'search-width';
    this.showbackground = this.showbackground === true ? false : true;
  }

  hideBackground(){
  this.inversValue();
  }
}
