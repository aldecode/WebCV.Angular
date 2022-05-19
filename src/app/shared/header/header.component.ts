import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isPortfolioDone: boolean = true;
  isBlogDone: boolean = false;
  isDownloadCVDone = false;

  constructor() { }

  ngOnInit(): void {
  }

}
