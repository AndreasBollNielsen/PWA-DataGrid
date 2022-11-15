import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ImageModel } from 'src/app/Models/image-model';
import { DataHandlerService } from 'src/app/Services/data-handler.service';
import { ImageDetailsComponent } from '../image-details/image-details.component';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  imageTiles: ImageModel[] = [];
  constructor(private datahandler: DataHandlerService, public dialog: MatDialog ) {

   datahandler.dataTiles$.subscribe(imagedata =>{
      next:
      if(imagedata.length != this.imageTiles.length)
      {
        this.imageTiles = imagedata;
      }
   })


  }

  ngOnInit(): void {}


  RowDetails(rowElement: ImageModel)
  {
   // console.log(rowElement);
    const config = new MatDialogConfig();
      config.autoFocus = true;
      config.width = '60vh';
      config.height = '40vh';
     config.data = {dataobject: rowElement};

      this.dialog.open(ImageDetailsComponent,config);
  }

  OpenImageInfo(index: number)
  {
    
  }

}
