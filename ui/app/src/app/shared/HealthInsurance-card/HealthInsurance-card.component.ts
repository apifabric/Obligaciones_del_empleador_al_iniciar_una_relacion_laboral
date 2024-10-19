import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './HealthInsurance-card.component.html',
  styleUrls: ['./HealthInsurance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.HealthInsurance-card]': 'true'
  }
})

export class HealthInsuranceCardComponent {


}