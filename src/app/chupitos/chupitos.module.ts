import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChupitosPageRoutingModule } from './chupitos-routing.module';

import { ChupitosPage } from './chupitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChupitosPageRoutingModule
  ],
  declarations: [ChupitosPage]
})
export class ChupitosPageModule {}
