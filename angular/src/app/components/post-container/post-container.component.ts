import {Component, OnInit} from '@angular/core';
import {CommService} from "../../services/comm.service";
import {Post} from "../../classes/Post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {


  posts: Post[];
  name: string;
  title: string;
  body: string;
  currentPost: Post;

  constructor(private commService: CommService,
              private router: Router) {
    this.posts = [];
  }

  ngOnInit() {
  }

  createRandomString(length) {
    const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return text;
  };

  savePost(): void {
    const newPost = new Post(
      this.createRandomString(16),
      this.name,
      new Date(),
      this.title,
      this.body);

    this.posts.push(newPost);
    this.commService.updatePosts(this.posts);
  }

  navigateToPost(post): void {
    this.commService.setCurrentPost(post);
    this.setLocal(post);
    this.router.navigate([`/view-post/${post._id}`]); // simulate get post from API
  }

  setLocal(post) {
    localStorage.clear();
    localStorage.setItem('post', JSON.stringify(post));
  }
}
