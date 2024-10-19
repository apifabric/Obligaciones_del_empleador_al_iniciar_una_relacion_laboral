import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthInsuranceHomeComponent } from './home/HealthInsurance-home.component';
import { HealthInsuranceNewComponent } from './new/HealthInsurance-new.component';
import { HealthInsuranceDetailComponent } from './detail/HealthInsurance-detail.component';

const routes: Routes = [
  {path: '', component: HealthInsuranceHomeComponent},
  { path: 'new', component: HealthInsuranceNewComponent },
  { path: ':id', component: HealthInsuranceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'HealthInsurance-detail-permissions'
      }
    }
  },{
    path: ':insurance_id/EmployeeHealthInsurance', loadChildren: () => import('../EmployeeHealthInsurance/EmployeeHealthInsurance.module').then(m => m.EmployeeHealthInsuranceModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeHealthInsurance-detail-permissions'
        }
    }
}
];

export const HEALTHINSURANCE_MODULE_DECLARATIONS = [
    HealthInsuranceHomeComponent,
    HealthInsuranceNewComponent,
    HealthInsuranceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthInsuranceRoutingModule { }