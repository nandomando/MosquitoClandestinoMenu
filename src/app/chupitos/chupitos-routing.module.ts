import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChupitosPage } from './chupitos.page';

const routes: Routes = [
  {
    path: '',
    component: ChupitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChupitosPageRoutingModule {}
