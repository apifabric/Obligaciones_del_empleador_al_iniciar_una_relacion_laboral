import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentProvidedHomeComponent } from './home/EquipmentProvided-home.component';
import { EquipmentProvidedNewComponent } from './new/EquipmentProvided-new.component';
import { EquipmentProvidedDetailComponent } from './detail/EquipmentProvided-detail.component';

const routes: Routes = [
  {path: '', component: EquipmentProvidedHomeComponent},
  { path: 'new', component: EquipmentProvidedNewComponent },
  { path: ':id', component: EquipmentProvidedDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EquipmentProvided-detail-permissions'
      }
    }
  }
];

export const EQUIPMENTPROVIDED_MODULE_DECLARATIONS = [
    EquipmentProvidedHomeComponent,
    EquipmentProvidedNewComponent,
    EquipmentProvidedDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentProvidedRoutingModule { }