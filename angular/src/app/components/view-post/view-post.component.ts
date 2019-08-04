import { Component, OnInit } from '@angular/core';
import {Post} from "../../classes/Post";
import {CommService} from "../../services/comm.service";
import {USComment} from "../../classes/Comment";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  post: Post;
  comments: USComment[] = [];
  addPost: boolean;
  name: string;
  commentText: string;

  constructor(private commService: CommService) { }

  ngOnInit() {
    this.initProperties();
    this.commService.currentPost.subscribe(p => {
      this.post = p;
    });
  }

  initProperties(): void {
    this.addPost = false;
  }

  addComment(): void {
    this.addPost = false;
    const _comment = new USComment(new Date(), this.name, this.commentText);
    this.comments.push(_comment);
    this.commService.addComment(this.comments);
    this.name = undefined;
    this.commentText = undefined;
  }





}
