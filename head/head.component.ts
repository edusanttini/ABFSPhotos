import { Component } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations:[
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})

export class HeadComponent   {

  toggleActive: boolean = false;
  constructor(private sidenav: SidenavService) { }

  callSideNav(){
    this.toggleActive = !this.toggleActive;
		this.sidenav.toggle();
  }
}