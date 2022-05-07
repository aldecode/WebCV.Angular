import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../interfaces/experienceModel';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({height: '0px', opacity: '0', visibility: 'hidden', overflow: 'hidden'}),
        animate('.35s ease-out', style({height: '*'})),
        animate('.15s ease-in', style({opacity: '1',visibility: 'visible'})),
      ]),
      transition(':leave', [
        animate('.15s ease-out', style({opacity: '0', visibility: 'hidden'})),
        animate('.15s ease-out', style({height: '0px'})),
      ])
    ])
  ]
})
export class ExperienceSectionComponent implements OnInit {

  experienceList: Array<ExperienceModel> = [
    {
      positionTitle: 'Junior .NET Developer',
      company: 'ELEKS',
      startMonth: 'May',
      startYear: '2022',
      endMonth: '',
      endYear: '',
      description: {
        responsibilities: [
          'Implementing new features in API',
          'Writing Unit and Integration tests',
          'Finding and fixing bugs',
          'Investigation logs and finding the causes of Warnings and Errors',
          'Creating wiki pages about the investigation',
        ],
        aboutProject: '',
        toolsAndTechnologies: '.NET 6, ASP.NET Web API, MediatR, nUnit, Microservices, MS SQL Server, AWS, Jenkins, Kibana, Grafana, Git/GitLab'
      }
    },
    {
      positionTitle: 'Trainee .NET Developer',
      company: 'ELEKS',
      startMonth: 'December',
      startYear: '2021',
      endMonth: 'May',
      endYear: '2022',
      description: {
        responsibilities: [
          'Implementing new features in API',
          'Writing Unit and Integration tests',
          'Finding and fixing bugs',
          'Investigation logs and finding the causes of Warnings and Errors',
          'Creating wiki pages about the investigation',
          'Testing the finished functionality'
        ],
        aboutProject: '',
        toolsAndTechnologies: '.NET 6, ASP.NET Web API, MediatR, nUnit, Microservices, MS SQL Server, AWS, Jenkins, Kibana, Grafana, Git/GitLab'
      }
    },
    {
      positionTitle: 'Intern .NET Developer',
      company: 'ELEKS',
      startMonth: 'September',
      startYear: '2021',
      endMonth: 'November',
      endYear: '2021',
      description: {
        responsibilities: [
          'Attended lectures about .NET and related topics.',
          'Created my own WebAPI pet-project from scratch.'
        ],
        aboutProject: 'AutoHubAPI - Web API that provides monolithic multi-layered architecture Back-End functionality for used cars auction application. The main purpose of this API was to be a playground for me to learn and practice new knowledge.',
        toolsAndTechnologies: ' NET 6 & C# 10, ASP.NET Web API, EF Core, JWT, Identity, xUnit, FluentAssertions, AutoFixture, Moq, AutoMapper, FluentValidation, BCrypt, Swagger + SwaggerUI, Swashbuckle'
      }
    },
    {
      positionTitle: 'Intern .NET Developer',
      company: 'Sigma Software',
      startMonth: 'March',
      startYear: '2021',
      endMonth: 'April',
      endYear: '2021',
      description: {
        responsibilities: [
          'Designed project via UML diagrams (Use Case, Class Diagram, DB Diagram, etc.)',
          'Developed common functionality (controllers, services, etc.)',
          'Writed unit-tests',
          'Created UI for the whole website via Figma and implemented that via HTML + CSS (Bootstrap 5, Vanilla)'
        ],
        aboutProject: 'A training full-stack web application that provides car rental service using React as a front-end, & monolithic three-layer architecture ASP.NET Web API as Back-end. The main purpose of this app was to learn the developing process, gain knowledge in developing the back-end on ASP.NET, and practice developing React front-end.',
        toolsAndTechnologies: 'C# 9.0, ASP.NET 5, Web API, MS SQL, Azure, Azure DevOps, HTML, CSS, Bootstrap, React, Git/GitHub, Rider, WebStorn DataGrip, Swagger'
      }
    }
  ]
  allToggles: Array<boolean> = new Array(this.experienceList.length).fill(false)

  constructor() { }

  ngOnInit(): void {  }

  public toggleShow(index: number): void {
    if (!this.allToggles[index]) {
      this.allToggles = this.allToggles.map(_ => false)
      this.allToggles[index] = !this.allToggles[index]
    }
    else {
      this.allToggles[index] = !this.allToggles[index]
    }

  }
}
