import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Post} from "../classes/Post";
import {USComment} from "../classes/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommService {

  private _posts = new BehaviorSubject([]);
  posts = this._posts.asObservable();

  private _comments = new BehaviorSubject([]);
  comments = this._comments.asObservable();

  private _currentPost = new BehaviorSubject(new Post(
    '123',
    'DEFAULT NAME',
    new Date(),
    'DEFAULT TITLE',
    'DEFAULT BODY'));
  currentPost = this._currentPost.asObservable();

  constructor() { }

  updatePosts(post) {
    this._posts.next(post);
  }

  setCurrentPost(post: Post): void {
    this._currentPost.next(post);
  }

  addComment(comments: USComment[]) {
    this._comments.next(comments)
  }
}
