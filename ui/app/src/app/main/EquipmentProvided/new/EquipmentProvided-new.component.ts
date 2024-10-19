import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EquipmentProvided-new',
  templateUrl: './EquipmentProvided-new.component.html',
  styleUrls: ['./EquipmentProvided-new.component.scss']
})
export class EquipmentProvidedNewComponent {
  @ViewChild("EquipmentProvidedForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}