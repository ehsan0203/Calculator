import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import {  RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers:[
    importProvidersFrom(CommonModule),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClient),
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(RouterModule)
  ]
})
  .catch((err) => console.error(err));
