import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    PortfolioPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PortfolioModule { }
