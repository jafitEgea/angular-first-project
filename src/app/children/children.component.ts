import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() title?: string;

  @Output() titleChange = new EventEmitter<string>();

  emitTitleChange() {
    this.titleChange.emit(this.title);
  }
}
