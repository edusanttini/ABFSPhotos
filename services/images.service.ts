import { Image } from "../models/image.model";

export class ImagesService {
  private images: Image[] = [
    {
      imageDesciption: 'bgImg0',
      image:
        '../../assets/img/bg.jpeg'
    },
    {
      imageDesciption: 'bgImg1',
      image:
        '../../assets/img/bg2.jpeg'
    },
    {
      imageDesciption: 'bgImg2',
      image:
        '../../assets/img/bg3.jpeg'
    }
  ];

  getImages() {
    return this.images.slice();
  }
}