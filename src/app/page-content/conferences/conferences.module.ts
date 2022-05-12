import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConferencesComponent} from './conferences.component';
import {ConferencesRoutingModule} from './conferences-routing.module';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [ConferencesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ConferencesRoutingModule,
  ]
})
export class ConferencesModule { }
