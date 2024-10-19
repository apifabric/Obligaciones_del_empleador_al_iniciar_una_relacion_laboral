import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Employer-card.component.html',
  styleUrls: ['./Employer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Employer-card]': 'true'
  }
})

export class EmployerCardComponent {


}