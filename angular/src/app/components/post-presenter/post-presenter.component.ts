import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../classes/Post";

@Component({
  selector: 'app-post-presenter',
  templateUrl: './post-presenter.component.html',
  styleUrls: ['./post-presenter.component.scss']
})
export class PostPresenterComponent implements OnInit {

  @Input() post: Post;
  @Output() goToPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  viewPost(): void {
    this.goToPost.emit(this.post);
  }

}
