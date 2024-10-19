import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkplaceSafetyHomeComponent } from './home/WorkplaceSafety-home.component';
import { WorkplaceSafetyNewComponent } from './new/WorkplaceSafety-new.component';
import { WorkplaceSafetyDetailComponent } from './detail/WorkplaceSafety-detail.component';

const routes: Routes = [
  {path: '', component: WorkplaceSafetyHomeComponent},
  { path: 'new', component: WorkplaceSafetyNewComponent },
  { path: ':id', component: WorkplaceSafetyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WorkplaceSafety-detail-permissions'
      }
    }
  }
];

export const WORKPLACESAFETY_MODULE_DECLARATIONS = [
    WorkplaceSafetyHomeComponent,
    WorkplaceSafetyNewComponent,
    WorkplaceSafetyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkplaceSafetyRoutingModule { }