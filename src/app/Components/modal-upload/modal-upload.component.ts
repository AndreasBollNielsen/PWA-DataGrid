import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  // constructor(@Inject(MAT_DIALOG_DATA) public data: {Path: string,Name: string}) { }

  constructor()
  {

  }

  ngOnInit(): void {
  }

}
