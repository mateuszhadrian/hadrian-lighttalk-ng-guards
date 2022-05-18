import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConferencesComponent} from './conferences.component';

const routes: Routes = [
  { path: '', component: ConferencesComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferencesRoutingModule { }
