import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'HealthInsurance-new',
  templateUrl: './HealthInsurance-new.component.html',
  styleUrls: ['./HealthInsurance-new.component.scss']
})
export class HealthInsuranceNewComponent {
  @ViewChild("HealthInsuranceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}