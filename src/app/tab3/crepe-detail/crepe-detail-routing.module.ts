import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepeDetailPage } from './crepe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CrepeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrepeDetailPageRoutingModule {}
