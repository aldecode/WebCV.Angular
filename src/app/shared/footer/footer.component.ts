import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentDate = new Date().getUTCFullYear()

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(userName: string, userEmail: string, userMessage: string){

  }
}
