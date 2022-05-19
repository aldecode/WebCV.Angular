import { Component, Inject, OnInit } from '@angular/core';
import { ProjectModel } from '../../pages/portfolio/interfaces/projectModel';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectModel) { }

  ngOnInit(): void { }

}
