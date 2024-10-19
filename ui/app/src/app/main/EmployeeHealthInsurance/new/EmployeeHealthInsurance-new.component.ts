import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeHealthInsurance-new',
  templateUrl: './EmployeeHealthInsurance-new.component.html',
  styleUrls: ['./EmployeeHealthInsurance-new.component.scss']
})
export class EmployeeHealthInsuranceNewComponent {
  @ViewChild("EmployeeHealthInsuranceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}