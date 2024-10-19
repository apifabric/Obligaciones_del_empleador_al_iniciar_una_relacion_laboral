import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WORKPLACESAFETY_MODULE_DECLARATIONS, WorkplaceSafetyRoutingModule} from  './WorkplaceSafety-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WorkplaceSafetyRoutingModule
  ],
  declarations: WORKPLACESAFETY_MODULE_DECLARATIONS,
  exports: WORKPLACESAFETY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkplaceSafetyModule { }