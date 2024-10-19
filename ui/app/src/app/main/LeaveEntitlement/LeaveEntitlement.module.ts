import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LEAVEENTITLEMENT_MODULE_DECLARATIONS, LeaveEntitlementRoutingModule} from  './LeaveEntitlement-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LeaveEntitlementRoutingModule
  ],
  declarations: LEAVEENTITLEMENT_MODULE_DECLARATIONS,
  exports: LEAVEENTITLEMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeaveEntitlementModule { }