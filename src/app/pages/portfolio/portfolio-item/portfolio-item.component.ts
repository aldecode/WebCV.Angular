import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../interfaces/projectModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../../shared/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-portfolio-item[project]',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() project!: ProjectModel;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {  }

  openProjectDetails(project: ProjectModel) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = project;
    dialogConfig.panelClass = 'dialog';
    dialogConfig.maxWidth = '';
    this.dialog.open(ModalDialogComponent, dialogConfig);
  }
}
