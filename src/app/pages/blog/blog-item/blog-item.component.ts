import { Component, Input, OnInit } from '@angular/core';
import { ArticleModel } from '../interfaces/articleModel';

@Component({
  selector: 'app-blog-item[article]',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() article!: ArticleModel;

  constructor() {  }

  ngOnInit(): void {
  }

  getRandomImageUrl(){
    return "https://random.imagecdn.app/300/150?cache=" + new Date().getTime()
  }
}
