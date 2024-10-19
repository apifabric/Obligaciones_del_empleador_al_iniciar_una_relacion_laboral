import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WorkplaceSafety-new',
  templateUrl: './WorkplaceSafety-new.component.html',
  styleUrls: ['./WorkplaceSafety-new.component.scss']
})
export class WorkplaceSafetyNewComponent {
  @ViewChild("WorkplaceSafetyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}