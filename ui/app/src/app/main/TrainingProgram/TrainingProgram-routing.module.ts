import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingProgramHomeComponent } from './home/TrainingProgram-home.component';
import { TrainingProgramNewComponent } from './new/TrainingProgram-new.component';
import { TrainingProgramDetailComponent } from './detail/TrainingProgram-detail.component';

const routes: Routes = [
  {path: '', component: TrainingProgramHomeComponent},
  { path: 'new', component: TrainingProgramNewComponent },
  { path: ':id', component: TrainingProgramDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TrainingProgram-detail-permissions'
      }
    }
  },{
    path: ':training_id/EmployeeTraining', loadChildren: () => import('../EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTraining-detail-permissions'
        }
    }
}
];

export const TRAININGPROGRAM_MODULE_DECLARATIONS = [
    TrainingProgramHomeComponent,
    TrainingProgramNewComponent,
    TrainingProgramDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingProgramRoutingModule { }