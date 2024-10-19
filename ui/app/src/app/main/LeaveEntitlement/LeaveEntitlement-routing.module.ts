import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveEntitlementHomeComponent } from './home/LeaveEntitlement-home.component';
import { LeaveEntitlementNewComponent } from './new/LeaveEntitlement-new.component';
import { LeaveEntitlementDetailComponent } from './detail/LeaveEntitlement-detail.component';

const routes: Routes = [
  {path: '', component: LeaveEntitlementHomeComponent},
  { path: 'new', component: LeaveEntitlementNewComponent },
  { path: ':id', component: LeaveEntitlementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LeaveEntitlement-detail-permissions'
      }
    }
  }
];

export const LEAVEENTITLEMENT_MODULE_DECLARATIONS = [
    LeaveEntitlementHomeComponent,
    LeaveEntitlementNewComponent,
    LeaveEntitlementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveEntitlementRoutingModule { }