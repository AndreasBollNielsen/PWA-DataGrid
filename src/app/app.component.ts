import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialogConfig,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalUploadComponent } from './Components/modal-upload/modal-upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PWA-DataGrid';

  

  constructor(private dialog: Dialog) {

  }

 

    openModal()
    {
      

      this.dialog.open(ModalUploadComponent,{height: '40vh',width: '60pvh',maxHeight: '40vh'});
    }


}
