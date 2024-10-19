import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeHealthInsurance-card.component.html',
  styleUrls: ['./EmployeeHealthInsurance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeHealthInsurance-card]': 'true'
  }
})

export class EmployeeHealthInsuranceCardComponent {


}