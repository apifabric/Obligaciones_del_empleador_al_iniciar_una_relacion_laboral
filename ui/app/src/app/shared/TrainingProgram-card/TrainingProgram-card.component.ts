import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TrainingProgram-card.component.html',
  styleUrls: ['./TrainingProgram-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TrainingProgram-card]': 'true'
  }
})

export class TrainingProgramCardComponent {


}