import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TrainingProgram-new',
  templateUrl: './TrainingProgram-new.component.html',
  styleUrls: ['./TrainingProgram-new.component.scss']
})
export class TrainingProgramNewComponent {
  @ViewChild("TrainingProgramForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}