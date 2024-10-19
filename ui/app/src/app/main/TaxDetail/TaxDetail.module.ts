import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TAXDETAIL_MODULE_DECLARATIONS, TaxDetailRoutingModule} from  './TaxDetail-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TaxDetailRoutingModule
  ],
  declarations: TAXDETAIL_MODULE_DECLARATIONS,
  exports: TAXDETAIL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaxDetailModule { }