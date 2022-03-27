import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
//import FormsModule here
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigFormComponent } from './config-form/config-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewConfigComponent } from './view-config/view-config.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigFormComponent,
    ViewConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
