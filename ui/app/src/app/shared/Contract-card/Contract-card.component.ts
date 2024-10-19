import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Contract-card.component.html',
  styleUrls: ['./Contract-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Contract-card]': 'true'
  }
})

export class ContractCardComponent {


}