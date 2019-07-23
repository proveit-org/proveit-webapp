import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'proveit-proof-path',
  templateUrl: './proof-path.component.html',
  styleUrls: ['./proof-path.component.scss']
})
export class ProofPathComponent implements OnInit {

  @Input() path: Array<any>;
  @Input() root: string;

  constructor(
  ) { }

  ngOnInit() {
  }

}
