import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollHomeComponent } from './home/Payroll-home.component';
import { PayrollNewComponent } from './new/Payroll-new.component';
import { PayrollDetailComponent } from './detail/Payroll-detail.component';

const routes: Routes = [
  {path: '', component: PayrollHomeComponent},
  { path: 'new', component: PayrollNewComponent },
  { path: ':id', component: PayrollDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Payroll-detail-permissions'
      }
    }
  }
];

export const PAYROLL_MODULE_DECLARATIONS = [
    PayrollHomeComponent,
    PayrollNewComponent,
    PayrollDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }