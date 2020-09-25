import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GazeosasPageRoutingModule } from './gazeosas-routing.module';

import { GazeosasPage } from './gazeosas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GazeosasPageRoutingModule
  ],
  declarations: [GazeosasPage]
})
export class GazeosasPageModule {}
