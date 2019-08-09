import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, query, group, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('showLeft', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hideLeft', style({
        opacity: 0,
        transform: 'translateX(-20%)'
      })),
      state('showRight', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hideRight', style({
        opacity: 0,
        transform: 'translateX(20%)'
      })),
      transition('showLeft => hideLeft', [
        query(':self', animate('300ms {{delay}}ms ease-out')),
      ], {params : { delay: 0 }}),
      transition('hideLeft => showLeft', [
        query(':self', animate('300ms {{delay}}ms ease-in')),
      ], {params : { delay: 0 }}),
      transition('showRight => hideRight', [
        query(':self', animate('300ms {{delay}}ms ease-out')),
      ], {params : { delay: 0 }}),
      transition('hideRight => showRight', [
        query(':self', animate('300ms {{delay}}ms ease-in')),
      ], {params : { delay: 0 }})
    ])
  ]
})

export class FeatureComponent implements OnInit {

  @Input() icon: string;
  @Input() img: string;
  @Input() title: string;
  @Input() text: string;
  @Input() direction: string;
  @Input() delay = 0;

  state: string;

  constructor(
    public el: ElementRef,
  ) {

  }

  ngOnInit() {
    this.state = this.direction === 'right' ? 'hideRight' : 'hideLeft';
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const topScreenPosition = window.pageYOffset;
    const screenHeight = window.outerHeight;

    if (componentPosition > (topScreenPosition - 200) && componentPosition < (topScreenPosition + 0.9 * screenHeight)) {
      this.state = this.direction === 'left' ? 'showLeft' : 'showRight';
    } else {
      this.state = this.direction === 'left' ? 'hideLeft' : 'hideRight';
    }

  }

}
