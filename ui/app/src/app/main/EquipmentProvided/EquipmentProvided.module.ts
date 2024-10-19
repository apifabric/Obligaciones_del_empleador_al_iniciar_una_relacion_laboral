import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EQUIPMENTPROVIDED_MODULE_DECLARATIONS, EquipmentProvidedRoutingModule} from  './EquipmentProvided-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EquipmentProvidedRoutingModule
  ],
  declarations: EQUIPMENTPROVIDED_MODULE_DECLARATIONS,
  exports: EQUIPMENTPROVIDED_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EquipmentProvidedModule { }