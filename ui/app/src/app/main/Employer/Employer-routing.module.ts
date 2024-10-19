import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerHomeComponent } from './home/Employer-home.component';
import { EmployerNewComponent } from './new/Employer-new.component';
import { EmployerDetailComponent } from './detail/Employer-detail.component';

const routes: Routes = [
  {path: '', component: EmployerHomeComponent},
  { path: 'new', component: EmployerNewComponent },
  { path: ':id', component: EmployerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Employer-detail-permissions'
      }
    }
  },{
    path: ':employer_id/Contract', loadChildren: () => import('../Contract/Contract.module').then(m => m.ContractModule),
    data: {
        oPermission: {
            permissionId: 'Contract-detail-permissions'
        }
    }
},{
    path: ':employer_id/WorkplaceSafety', loadChildren: () => import('../WorkplaceSafety/WorkplaceSafety.module').then(m => m.WorkplaceSafetyModule),
    data: {
        oPermission: {
            permissionId: 'WorkplaceSafety-detail-permissions'
        }
    }
}
];

export const EMPLOYER_MODULE_DECLARATIONS = [
    EmployerHomeComponent,
    EmployerNewComponent,
    EmployerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }