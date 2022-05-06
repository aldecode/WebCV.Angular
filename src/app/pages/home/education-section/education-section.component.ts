import { Component, Input, OnInit } from '@angular/core';
import { IEducationModel } from '../interfaces/educationModel';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss']
})
export class EducationSectionComponent implements OnInit {
  @Input() collapsing= true;

  expanded = new Set<number>();

  getToggleState = (index: number) => {
    return this.toggleState.bind(this, index)
  }

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }
  }

  educationList: Array<IEducationModel> = [
    {
      educationalInstitution: 'State University of Telecommunication',
      degree: 'Bachelor',
      speciality: 'Computer science',
      startYear: '2019',
      endYear: '2023',
      description: 'In the course, I got educational experience of developing C# applications, аlso designing it from UML diagrams, UX / UI, front-end development, to back-end development using a database, design patterns, and a lot more.',
    },
    {
      educationalInstitution: 'University of Cambridge',
      degree: 'Master',
      speciality: 'Computer science',
      startYear: '2023',
      endYear: '2025',
      description: 'Countless faiths will be lost in deaths like turbulences in sonic showers All the tragedies will be lost in sensors like stigmas in disconnections dozens of procedures will be lost in coordinates like minerals in moons.'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
