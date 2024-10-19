import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LeaveEntitlement-card.component.html',
  styleUrls: ['./LeaveEntitlement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LeaveEntitlement-card]': 'true'
  }
})

export class LeaveEntitlementCardComponent {


}