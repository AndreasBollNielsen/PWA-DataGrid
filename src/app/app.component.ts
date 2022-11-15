import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalUploadComponent } from './Components/modal-upload/modal-upload.component';
import { ImageModel } from './Models/image-model';
import { DataHandlerService } from './Services/data-handler.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PWA-DataGrid';

  img: any;

  constructor(public dialog: MatDialog, private datahandler: DataHandlerService) {
    

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
          const imgFile = imgBase64Path;
          
          this.img = imgFile;
         
        // console.log(imgFile);
        const imagedata: ImageModel = {Path: imgFile,Name: 'name',ImageType: 'type'};
          //this.datahandler.UploadImage(imagedata);
          this.openModal(imgFile);

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
      const imagedata: ImageModel = {Path: image,Name: 'name',ImageType: 'type'};

      const config = new MatDialogConfig();
      config.autoFocus = true;
      config.width = '110vh';
      config.height = '50vh';
      config.data = imagedata;

      this.dialog.open(ModalUploadComponent, config);
    }


}
