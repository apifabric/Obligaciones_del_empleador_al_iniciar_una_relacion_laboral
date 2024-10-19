import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EquipmentProvided-card.component.html',
  styleUrls: ['./EquipmentProvided-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EquipmentProvided-card]': 'true'
  }
})

export class EquipmentProvidedCardComponent {


}