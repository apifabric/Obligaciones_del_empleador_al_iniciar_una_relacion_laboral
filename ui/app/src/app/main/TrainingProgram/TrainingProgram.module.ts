import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRAININGPROGRAM_MODULE_DECLARATIONS, TrainingProgramRoutingModule} from  './TrainingProgram-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TrainingProgramRoutingModule
  ],
  declarations: TRAININGPROGRAM_MODULE_DECLARATIONS,
  exports: TRAININGPROGRAM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingProgramModule { }