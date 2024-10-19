import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TaxDetail-card.component.html',
  styleUrls: ['./TaxDetail-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TaxDetail-card]': 'true'
  }
})

export class TaxDetailCardComponent {


}