import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './components/shared/shared.module';

import { AuthModule } from './components/auth/auth.module';
import { PagesModule } from './components/movies/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/shared/material.module';
import { ParamsInterceptor } from './services/interceptors/params.interceptor';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    PagesModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ParamsInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
