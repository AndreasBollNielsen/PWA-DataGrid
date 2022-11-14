import { Component, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/Models/image-model';
import { DataHandlerService } from 'src/app/Services/data-handler.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

   imageTiles: ImageModel[] = [];
  constructor(private datahandler: DataHandlerService) {
    
  }
  
  ngOnInit(): void {
  }

}
