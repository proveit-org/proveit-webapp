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
        transform: 'translateX(-100%)'
      })),
      state('showRight', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hideRight', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('showLeft => hideLeft', animate('700ms ease-out')),
      transition('hideLeft => showLeft', animate('700ms ease-in')),
      transition('showRight => hideRight', animate('700ms ease-out')),
      transition('hideRight => showRight', animate('700ms ease-in'))
    ])
  ]
})
export class FeatureComponent implements OnInit {

  @Input() icon: string;
  @Input() img: string;
  @Input() title: string;
  @Input() text: string;
  @Input() direction: string;

  state: string;

  constructor(
    public el: ElementRef,
  ) {
    this.state = this.direction === 'right' ? 'hideRight' : 'hideLeft';
  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const topScreenPosition = window.pageYOffset;
    const screenHeight = window.outerHeight;

    if (componentPosition > (topScreenPosition - 100) && componentPosition < (topScreenPosition + 0.8 * screenHeight)) {
      this.state = this.direction === 'left' ? 'showLeft' : 'showRight';
    } else {
      this.state = this.direction === 'left' ? 'hideLeft' : 'hideRight';
    }

  }

}
