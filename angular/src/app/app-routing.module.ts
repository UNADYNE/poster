import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewPostComponent} from "./components/view-post/view-post.component";
import {PostContainerComponent} from "./components/post-container/post-container.component";

const routes: Routes = [
  {path: '', component: PostContainerComponent},
  {path: 'view-post/:id', component: ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
