import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TRMSFormComponent } from './trmsform/trmsform.component';
import { TRMSHomeComponent } from './trmshome/trmshome.component';

const routes: Routes = [
  {
    path: '', component: TRMSHomeComponent
  },

  {
    path: 'trmsform', component:TRMSFormComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
 
})
export class AppRoutingModule { }
