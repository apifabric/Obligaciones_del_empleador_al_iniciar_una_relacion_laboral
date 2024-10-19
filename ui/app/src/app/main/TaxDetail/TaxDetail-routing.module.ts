import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxDetailHomeComponent } from './home/TaxDetail-home.component';
import { TaxDetailNewComponent } from './new/TaxDetail-new.component';
import { TaxDetailDetailComponent } from './detail/TaxDetail-detail.component';

const routes: Routes = [
  {path: '', component: TaxDetailHomeComponent},
  { path: 'new', component: TaxDetailNewComponent },
  { path: ':id', component: TaxDetailDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TaxDetail-detail-permissions'
      }
    }
  }
];

export const TAXDETAIL_MODULE_DECLARATIONS = [
    TaxDetailHomeComponent,
    TaxDetailNewComponent,
    TaxDetailDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxDetailRoutingModule { }