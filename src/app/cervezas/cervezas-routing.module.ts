import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CervezasPage } from './cervezas.page';

const routes: Routes = [
  {
    path: '',
    component: CervezasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CervezasPageRoutingModule {}
