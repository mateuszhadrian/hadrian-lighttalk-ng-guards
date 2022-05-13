import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageContentComponent} from './page-content/page-content.component';
import {PageAuthComponent} from './page-auth/page-auth.component';
import {CoursesComponent} from './page-content/courses/courses.component';
import {BooksComponent} from './page-content/books/books.component';
import {ConferencesModule} from './page-content/conferences/conferences.module';
// import {AuthGuard} from './auth.guard';
import {PreventAccidentalLeavingGuard} from './page-content/books/prevent-accidental-leaving.guard';
import {CoursesResolver} from './page-content/courses/courses.resolver';
import {CanLoadConferencesLazilyGuard} from './page-content/conferences/can-load-conferences-lazily.guard';

const routes: Routes = [
  {path: '', redirectTo: 'base', pathMatch: 'full' },
  {path: 'base',
    // canActivateChild: [AuthGuard],
    component: PageContentComponent,
    children: [
      {path: 'courses', component: CoursesComponent, resolve: {courses: CoursesResolver}},
      {path: 'books', component: BooksComponent, canDeactivate: [PreventAccidentalLeavingGuard]},
      {path: 'conferences',
        loadChildren: () => import('./page-content/conferences/conferences.module')
          .then((m : {ConferencesModule: ConferencesModule}) => m.ConferencesModule),
        canLoad: [CanLoadConferencesLazilyGuard]
      },
    ]},
  {path: 'auth', component: PageAuthComponent},
  {path: '**', redirectTo: 'base'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
