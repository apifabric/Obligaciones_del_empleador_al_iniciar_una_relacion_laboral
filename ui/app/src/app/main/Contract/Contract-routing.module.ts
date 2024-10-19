import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractHomeComponent } from './home/Contract-home.component';
import { ContractNewComponent } from './new/Contract-new.component';
import { ContractDetailComponent } from './detail/Contract-detail.component';

const routes: Routes = [
  {path: '', component: ContractHomeComponent},
  { path: 'new', component: ContractNewComponent },
  { path: ':id', component: ContractDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Contract-detail-permissions'
      }
    }
  }
];

export const CONTRACT_MODULE_DECLARATIONS = [
    ContractHomeComponent,
    ContractNewComponent,
    ContractDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }