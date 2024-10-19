import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PAYROLL_MODULE_DECLARATIONS, PayrollRoutingModule} from  './Payroll-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PayrollRoutingModule
  ],
  declarations: PAYROLL_MODULE_DECLARATIONS,
  exports: PAYROLL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PayrollModule { }