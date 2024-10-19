import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Payroll-card.component.html',
  styleUrls: ['./Payroll-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Payroll-card]': 'true'
  }
})

export class PayrollCardComponent {


}