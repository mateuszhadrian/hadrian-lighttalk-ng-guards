import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageContentComponent} from './page-content/page-content.component';
import {PageAuthComponent} from './page-auth/page-auth.component';
import {CoursesComponent} from './page-content/courses/courses.component';
import {BooksComponent} from './page-content/books/books.component';
import {ConferencesModule} from './page-content/conferences/conferences.module';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'base', pathMatch: 'full' },
  {path: 'base', canActivateChild: [AuthGuard], component: PageContentComponent, children: [
      {path: 'courses', component: CoursesComponent},
      {path: 'books', component: BooksComponent},
      {path: 'conferences', loadChildren: () => import('./page-content/conferences/conferences.module')
          .then((m : {ConferencesModule: ConferencesModule}) => m.ConferencesModule)},
    ]},
  {path: 'auth', component: PageAuthComponent},
  {path: '**', redirectTo: 'base'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
