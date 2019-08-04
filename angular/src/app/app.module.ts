import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { PostPresenterComponent } from './components/post-presenter/post-presenter.component';
import {CommService} from "./services/comm.service";
import {FormsModule} from "@angular/forms";
import { ViewPostComponent } from './components/view-post/view-post.component';
import {MatButtonModule, MatIconModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostContainerComponent,
    PostPresenterComponent,
    ViewPostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    CommService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
