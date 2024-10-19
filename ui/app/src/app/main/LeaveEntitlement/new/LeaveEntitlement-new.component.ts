import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'LeaveEntitlement-new',
  templateUrl: './LeaveEntitlement-new.component.html',
  styleUrls: ['./LeaveEntitlement-new.component.scss']
})
export class LeaveEntitlementNewComponent {
  @ViewChild("LeaveEntitlementForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}