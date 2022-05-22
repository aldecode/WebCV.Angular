import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../interfaces/articleModel';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  articles: Array<ArticleModel> = [
    {
      id: 1,
      headline: "How to design dbContext",
      summary: "This article will show you easy and fast example how to desing yout code-first dbContext in Entity Framework Core",
      content: "Some text",
      imagePath: ""
    },
    {
      id: 1,
      headline: "How to design dbContext",
      summary: "This article will show you easy and fast example how to desing yout code-first dbContext in Entity Framework Core",
      content: "Some text",
      imagePath: ""
    },
  ]

  constructor() { }

  ngOnInit(): void { }
}
