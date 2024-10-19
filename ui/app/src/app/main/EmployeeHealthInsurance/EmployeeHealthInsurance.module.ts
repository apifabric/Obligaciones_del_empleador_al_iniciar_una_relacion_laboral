import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEEHEALTHINSURANCE_MODULE_DECLARATIONS, EmployeeHealthInsuranceRoutingModule} from  './EmployeeHealthInsurance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeHealthInsuranceRoutingModule
  ],
  declarations: EMPLOYEEHEALTHINSURANCE_MODULE_DECLARATIONS,
  exports: EMPLOYEEHEALTHINSURANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeHealthInsuranceModule { }