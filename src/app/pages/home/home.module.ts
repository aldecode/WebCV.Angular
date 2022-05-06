import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';

@NgModule({
  declarations: [
    HomePageComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
