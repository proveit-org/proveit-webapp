import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, query, group, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class FeatureComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() text: string;

  state = 'hide';

  constructor(
    public el: ElementRef,
  ) {

  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const topScreenPosition = window.pageYOffset;
    const screenHeight = window.outerHeight;

    if (componentPosition > topScreenPosition && componentPosition < (topScreenPosition + 0.8 * screenHeight)) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

  }

}
