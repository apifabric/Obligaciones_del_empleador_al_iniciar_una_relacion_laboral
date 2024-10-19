import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TaxDetail-new',
  templateUrl: './TaxDetail-new.component.html',
  styleUrls: ['./TaxDetail-new.component.scss']
})
export class TaxDetailNewComponent {
  @ViewChild("TaxDetailForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}