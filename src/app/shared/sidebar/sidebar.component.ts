import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarInfo = {
    firstName: 'Nikita',
    lastName: 'Reshetnik',
    positionTitle: 'Junior .NET Developer',
    city: 'Kyiv',
    country: 'Ukraine',
    email: 'reshetnik.nikita@gmail.com',
    phone: '+38(068)752-14-48',
    telegram: '@reshetnigram',
  }

  links = {
    gitHubLink: 'https://github.com/aldecode',
    linkedInLink: 'https://www.linkedin.com/in/nikita-reshetnik-8232181b0/',
    repositoryLink: 'https://github.com/aldecode/WebCV.Angular',
  }

  constructor() { }

  ngOnInit(): void {
  }

}

