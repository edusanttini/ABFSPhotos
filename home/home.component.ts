import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image.model';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  bgImgs: Image[] = [];
  actualImg: string;
  changeBgCounter = 0;

  constructor(
    private imagesService: ImagesService
  ){ }

  ngOnInit(){
    this.bgImgs = this.imagesService.getImages();
    this.actualImg = this.bgImgs[0].image;
    setInterval(() => {
      this.changeBgCounter++;
      if(this.changeBgCounter > this.bgImgs.length - 1)
        this.changeBgCounter = 0;
      this.actualImg = this.bgImgs[this.changeBgCounter].image;
    }, 5000)
  }
}