import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandwichDetailPageRoutingModule } from './sandwich-detail-routing.module';

import { SandwichDetailPage } from './sandwich-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandwichDetailPageRoutingModule
  ],
  declarations: [SandwichDetailPage]
})
export class SandwichDetailPageModule {}
