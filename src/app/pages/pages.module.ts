import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    BlogPageComponent,
    PortfolioPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }
