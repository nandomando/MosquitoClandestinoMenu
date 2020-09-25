import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GazeosasPage } from './gazeosas.page';

const routes: Routes = [
  {
    path: '',
    component: GazeosasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GazeosasPageRoutingModule {}
