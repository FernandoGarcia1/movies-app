import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './components/modules/movies/pages.module';

import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
