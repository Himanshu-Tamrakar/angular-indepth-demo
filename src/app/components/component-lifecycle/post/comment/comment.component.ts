import {
  DoCheck,
  EventEmitter,
  KeyValueDiffer,
  KeyValueDiffers,
} from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements DoCheck {
  @Input('comment') comment: object;
  @Output('remove') remove: EventEmitter<any>;
  differ: KeyValueDiffer<any, any>;
  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find([]).create();
    this.remove = new EventEmitter();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comment);

    if (changes) {
      changes.forEachAddedItem((r) => console.log('%c comment add', 'red'));
      changes.forEachChangedItem((r) =>
        console.log('%c comment changed', 'red')
      );
      changes.forEachRemovedItem((r) =>
        console.log('%c comment removed', 'red')
      );
    }
  }

  removeComment() {
    this.remove.emit(this.comment);
  }
}
