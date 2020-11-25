import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TRMSHeaderComponent } from './trmsheader/trmsheader.component';
import { TRMSHomeComponent } from './trmshome/trmshome.component';
import { TRMSFormComponent } from './trmsform/trmsform.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TRMSHeaderComponent,
    TRMSHomeComponent,
    TRMSFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
