import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHealthInsuranceHomeComponent } from './home/EmployeeHealthInsurance-home.component';
import { EmployeeHealthInsuranceNewComponent } from './new/EmployeeHealthInsurance-new.component';
import { EmployeeHealthInsuranceDetailComponent } from './detail/EmployeeHealthInsurance-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeHealthInsuranceHomeComponent},
  { path: 'new', component: EmployeeHealthInsuranceNewComponent },
  { path: ':id', component: EmployeeHealthInsuranceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeHealthInsurance-detail-permissions'
      }
    }
  }
];

export const EMPLOYEEHEALTHINSURANCE_MODULE_DECLARATIONS = [
    EmployeeHealthInsuranceHomeComponent,
    EmployeeHealthInsuranceNewComponent,
    EmployeeHealthInsuranceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeHealthInsuranceRoutingModule { }