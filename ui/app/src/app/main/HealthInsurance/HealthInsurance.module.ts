import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HEALTHINSURANCE_MODULE_DECLARATIONS, HealthInsuranceRoutingModule} from  './HealthInsurance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HealthInsuranceRoutingModule
  ],
  declarations: HEALTHINSURANCE_MODULE_DECLARATIONS,
  exports: HEALTHINSURANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthInsuranceModule { }