import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WorkplaceSafety-card.component.html',
  styleUrls: ['./WorkplaceSafety-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WorkplaceSafety-card]': 'true'
  }
})

export class WorkplaceSafetyCardComponent {


}