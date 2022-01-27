import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrepeDetailPageRoutingModule } from './crepe-detail-routing.module';

import { CrepeDetailPage } from './crepe-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrepeDetailPageRoutingModule
  ],
  declarations: [CrepeDetailPage]
})
export class CrepeDetailPageModule {}
