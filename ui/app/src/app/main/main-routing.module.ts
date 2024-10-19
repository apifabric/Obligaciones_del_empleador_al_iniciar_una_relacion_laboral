import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Contract', loadChildren: () => import('./Contract/Contract.module').then(m => m.ContractModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'EmployeeHealthInsurance', loadChildren: () => import('./EmployeeHealthInsurance/EmployeeHealthInsurance.module').then(m => m.EmployeeHealthInsuranceModule) },
    
        { path: 'EmployeeTraining', loadChildren: () => import('./EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule) },
    
        { path: 'Employer', loadChildren: () => import('./Employer/Employer.module').then(m => m.EmployerModule) },
    
        { path: 'EquipmentProvided', loadChildren: () => import('./EquipmentProvided/EquipmentProvided.module').then(m => m.EquipmentProvidedModule) },
    
        { path: 'HealthInsurance', loadChildren: () => import('./HealthInsurance/HealthInsurance.module').then(m => m.HealthInsuranceModule) },
    
        { path: 'LeaveEntitlement', loadChildren: () => import('./LeaveEntitlement/LeaveEntitlement.module').then(m => m.LeaveEntitlementModule) },
    
        { path: 'Payroll', loadChildren: () => import('./Payroll/Payroll.module').then(m => m.PayrollModule) },
    
        { path: 'TaxDetail', loadChildren: () => import('./TaxDetail/TaxDetail.module').then(m => m.TaxDetailModule) },
    
        { path: 'TrainingProgram', loadChildren: () => import('./TrainingProgram/TrainingProgram.module').then(m => m.TrainingProgramModule) },
    
        { path: 'WorkplaceSafety', loadChildren: () => import('./WorkplaceSafety/WorkplaceSafety.module').then(m => m.WorkplaceSafetyModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }