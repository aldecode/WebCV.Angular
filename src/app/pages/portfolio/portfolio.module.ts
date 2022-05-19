import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalDialogComponent } from '../../shared/modal-dialog/modal-dialog.component';


@NgModule({
  declarations: [
    PortfolioPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  entryComponents: [ModalDialogComponent]
})
export class PortfolioModule { }
