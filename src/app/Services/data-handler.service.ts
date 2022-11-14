import { Injectable } from '@angular/core';
import { ImageModel } from '../Models/image-model';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  dataTiles: ImageModel[] = [];

  constructor() {}

  UploadImage() {}

  UpdateTiles() {}

  PopulateTiles(): ImageModel[] {

    for (let index = 0; index < 10; index++) {
      const element: ImageModel =
      {Path: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg',
      Name: 'Kitty',
      ImageType: 'type'};

      this.dataTiles.push(element);
    }

    return this.dataTiles;
  }
}
