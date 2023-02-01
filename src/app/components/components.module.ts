import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class ComponentsModule { }
