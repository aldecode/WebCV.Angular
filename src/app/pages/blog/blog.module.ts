import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogItemComponent } from './blog-item/blog-item.component';

@NgModule({
  declarations: [
    BlogPageComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
