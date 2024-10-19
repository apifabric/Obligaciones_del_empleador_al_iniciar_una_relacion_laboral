import { MenuRootItem } from 'ontimize-web-ngx';

import { ContractCardComponent } from './Contract-card/Contract-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { EmployeeHealthInsuranceCardComponent } from './EmployeeHealthInsurance-card/EmployeeHealthInsurance-card.component';

import { EmployeeTrainingCardComponent } from './EmployeeTraining-card/EmployeeTraining-card.component';

import { EmployerCardComponent } from './Employer-card/Employer-card.component';

import { EquipmentProvidedCardComponent } from './EquipmentProvided-card/EquipmentProvided-card.component';

import { HealthInsuranceCardComponent } from './HealthInsurance-card/HealthInsurance-card.component';

import { LeaveEntitlementCardComponent } from './LeaveEntitlement-card/LeaveEntitlement-card.component';

import { PayrollCardComponent } from './Payroll-card/Payroll-card.component';

import { TaxDetailCardComponent } from './TaxDetail-card/TaxDetail-card.component';

import { TrainingProgramCardComponent } from './TrainingProgram-card/TrainingProgram-card.component';

import { WorkplaceSafetyCardComponent } from './WorkplaceSafety-card/WorkplaceSafety-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Contract', name: 'CONTRACT', icon: 'view_list', route: '/main/Contract' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'EmployeeHealthInsurance', name: 'EMPLOYEEHEALTHINSURANCE', icon: 'view_list', route: '/main/EmployeeHealthInsurance' }
    
        ,{ id: 'EmployeeTraining', name: 'EMPLOYEETRAINING', icon: 'view_list', route: '/main/EmployeeTraining' }
    
        ,{ id: 'Employer', name: 'EMPLOYER', icon: 'view_list', route: '/main/Employer' }
    
        ,{ id: 'EquipmentProvided', name: 'EQUIPMENTPROVIDED', icon: 'view_list', route: '/main/EquipmentProvided' }
    
        ,{ id: 'HealthInsurance', name: 'HEALTHINSURANCE', icon: 'view_list', route: '/main/HealthInsurance' }
    
        ,{ id: 'LeaveEntitlement', name: 'LEAVEENTITLEMENT', icon: 'view_list', route: '/main/LeaveEntitlement' }
    
        ,{ id: 'Payroll', name: 'PAYROLL', icon: 'view_list', route: '/main/Payroll' }
    
        ,{ id: 'TaxDetail', name: 'TAXDETAIL', icon: 'view_list', route: '/main/TaxDetail' }
    
        ,{ id: 'TrainingProgram', name: 'TRAININGPROGRAM', icon: 'view_list', route: '/main/TrainingProgram' }
    
        ,{ id: 'WorkplaceSafety', name: 'WORKPLACESAFETY', icon: 'view_list', route: '/main/WorkplaceSafety' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ContractCardComponent

    ,EmployeeCardComponent

    ,EmployeeHealthInsuranceCardComponent

    ,EmployeeTrainingCardComponent

    ,EmployerCardComponent

    ,EquipmentProvidedCardComponent

    ,HealthInsuranceCardComponent

    ,LeaveEntitlementCardComponent

    ,PayrollCardComponent

    ,TaxDetailCardComponent

    ,TrainingProgramCardComponent

    ,WorkplaceSafetyCardComponent

];