import {
  Component,
  DoCheck,
  ElementRef,
  IterableDiffers,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements DoCheck {
  comments: [{ [text: string]: string }];
  differ: any;

  constructor(private differs: IterableDiffers) {
    this.differ = this.differs.find([]).create(null);
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comments);

    if (changes) {
      changes.forEachAddedItem((r) => console.log('post: add', r));
      changes.forEachRemovedItem((r) => {
        console.log('post: remove', r);
      });
    }
  }

  addPost(elemRef: HTMLElement) {
    if (!this.comments) this.comments = [{ text: elemRef['value'] }];
    else this.comments && this.comments.push({ text: elemRef['value'] });

    elemRef['value'] = '';
  }

  onRemove(value) {
    const pos = this.comments.indexOf(value);
    this.comments.splice(pos, 1);
  }
}
