import { Component, OnInit, Input } from '@angular/core';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'proveit-proof-path',
  templateUrl: './proof-path.component.html',
  styleUrls: ['./proof-path.component.scss']
})
export class ProofPathComponent implements OnInit {

  @Input() path: Array<any>;
  @Input() root: string;
  @Input() hash: string;
  steps: Array<any>;

  constructor(
  ) { }

  ngOnInit() {
    this.steps = this.formatPath(this.path, this.hash, 'full');
  }

  formatPath(path, hash, treeformat) {
    const steps = [{
      op: 'sha256',
      params: (treeformat === 'full') ? [hash] : undefined,
      res: hash
    }];
    let tmp = steps[0].res;
    path.forEach(step => {
      if (step.left === tmp) {
        steps.push({
          op: 'append',
          params: (treeformat === 'full') ? [step.right] : undefined,
          res: tmp + step.right
        });
      } else if (step.right === tmp) {
        steps.push({
          op: 'prepend',
          params: (treeformat === 'full') ? [step.left] : undefined,
          res: step.left + tmp
        });
      } else {
        throw Error('Cant format tree path');
      }
      tmp = steps[steps.length - 1].res;
      steps.push({
        op: 'sha256',
        params: (treeformat === 'full') ? [steps[steps.length - 1].res] : undefined,
        res: tmp
      });
    });
    return steps;
  }

}
