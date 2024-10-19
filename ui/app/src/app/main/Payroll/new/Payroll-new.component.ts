import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Payroll-new',
  templateUrl: './Payroll-new.component.html',
  styleUrls: ['./Payroll-new.component.scss']
})
export class PayrollNewComponent {
  @ViewChild("PayrollForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}