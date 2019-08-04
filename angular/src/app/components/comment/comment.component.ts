import {Component, Input, OnInit} from '@angular/core';
import {USComment} from '../../classes/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: USComment;

  constructor() { }

  ngOnInit() {
  }

}
