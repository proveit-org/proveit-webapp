import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, query, group, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [
    trigger('enterLeave', [
      transition('void => *', [
        // 'From' Style
        style({ opacity: 0.2, transform: 'translateY(-100%)' }),
        animate('1500ms ease-in')
      ]),
      transition('* => void', [
        animate('1500ms ease-in',
          // 'To' Style
          style({ opacity: 1, transform: 'translateY(-100%)' }),
        )
      ])
    ])
  ]
})
export class FeatureComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() text: string;

  constructor() {

  }

  ngOnInit() {
    console.log(this.icon)
    console.log(this.title)
  }

}
