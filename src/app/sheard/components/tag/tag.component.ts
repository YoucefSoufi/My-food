import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

  @Output() selected = new EventEmitter<string>();

  @Input() selectable: boolean = false;

  select: boolean = false;
  
  @Input() tag: Tag = new Tag();

  tagClick(tagName: string){
    console.log(tagName);
    this.select = !this.select;
    this.selected.emit(tagName);
    
  }

}
