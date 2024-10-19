import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './home/Employee-home.component';
import { EmployeeNewComponent } from './new/Employee-new.component';
import { EmployeeDetailComponent } from './detail/Employee-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeHomeComponent},
  { path: 'new', component: EmployeeNewComponent },
  { path: ':id', component: EmployeeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Employee-detail-permissions'
      }
    }
  },{
    path: ':employee_id/Contract', loadChildren: () => import('../Contract/Contract.module').then(m => m.ContractModule),
    data: {
        oPermission: {
            permissionId: 'Contract-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeHealthInsurance', loadChildren: () => import('../EmployeeHealthInsurance/EmployeeHealthInsurance.module').then(m => m.EmployeeHealthInsuranceModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeHealthInsurance-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeTraining', loadChildren: () => import('../EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTraining-detail-permissions'
        }
    }
},{
    path: ':employee_id/EquipmentProvided', loadChildren: () => import('../EquipmentProvided/EquipmentProvided.module').then(m => m.EquipmentProvidedModule),
    data: {
        oPermission: {
            permissionId: 'EquipmentProvided-detail-permissions'
        }
    }
},{
    path: ':employee_id/LeaveEntitlement', loadChildren: () => import('../LeaveEntitlement/LeaveEntitlement.module').then(m => m.LeaveEntitlementModule),
    data: {
        oPermission: {
            permissionId: 'LeaveEntitlement-detail-permissions'
        }
    }
},{
    path: ':employee_id/Payroll', loadChildren: () => import('../Payroll/Payroll.module').then(m => m.PayrollModule),
    data: {
        oPermission: {
            permissionId: 'Payroll-detail-permissions'
        }
    }
},{
    path: ':employee_id/TaxDetail', loadChildren: () => import('../TaxDetail/TaxDetail.module').then(m => m.TaxDetailModule),
    data: {
        oPermission: {
            permissionId: 'TaxDetail-detail-permissions'
        }
    }
}
];

export const EMPLOYEE_MODULE_DECLARATIONS = [
    EmployeeHomeComponent,
    EmployeeNewComponent,
    EmployeeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }