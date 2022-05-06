import { Component, OnInit } from '@angular/core';
import { SkillsModel } from '../interfaces/skillsModel';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {

  skills: Array<Array<SkillsModel>> = [
    [
      {
        technology: 'C#',
        level: 3
      },
      {
        technology: '.NET Core',
        level: 3
      },
      {
        technology: 'ASP.NET Core',
        level: 3
      },
      {
        technology: 'EF Core',
        level: 2
      },
      {
        technology: 'SQL',
        level: 2
      },
      {
        technology: 'Unit-Testing',
        level: 2
      }

    ],
    [
      {
        technology: 'HTML',
        level: 3
      },
      {
        technology: 'CSS/SCSS',
        level: 2
      },
      {
        technology: 'TypeScript',
        level: 1
      },
      {
        technology: 'Angular',
        level: 1
      },
      {
        technology: 'Figma',
        level: 2
      },
    ],
    [
      {
        technology: 'Kibana',
        level: 3
      },
      {
        technology: 'Git',
        level: 2
      },
      {
        technology: 'Jenkins',
        level: 2
      },
      {
        technology: 'AWS',
        level: 1
      },
      {
        technology: 'Azure',
        level: 1
      },
      {
        technology: 'UML',
        level: 1
      },
    ],
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getSkillLevelName(level:number) {
    switch (level) {
      case 3:
        return 'Advanced'
      case 2:
        return 'Intermediate'
      case 1:
        return 'Novice'
      default:
        return 'Unknown'
    }
  }
}
