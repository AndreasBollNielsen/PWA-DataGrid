import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageModel } from 'src/app/Models/image-model';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  img: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageModel) {

    this.img = data.Path;

    console.log("dialog: ",this.img);
  }


  // constructor()
  // {

  // }

  ngOnInit(): void {

    console.log(this.img.Path);
  }

 

}
