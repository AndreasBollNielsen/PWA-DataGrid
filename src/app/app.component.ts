import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialogConfig,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalUploadComponent } from './Components/modal-upload/modal-upload.component';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PWA-DataGrid';



  constructor(public dialog: Dialog) {

  }


//  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;

         // this.openModal(imgBase64Path);

        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      //this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }



    openModal(image: any)
    {

      this.dialog.open(ModalUploadComponent,{width: '60vh',height: '40vh',autoFocus: 'True'});
    }


}
