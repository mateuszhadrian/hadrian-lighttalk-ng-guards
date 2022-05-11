import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageContentComponent} from './page-content/page-content.component';
import {PageAuthComponent} from './page-auth/page-auth.component';
import {ConferencesComponent} from './page-content/conferences/conferences.component';
import {CoursesComponent} from './page-content/courses/courses.component';
import {BooksComponent} from './page-content/books/books.component';

const routes: Routes = [
  {path: '', redirectTo: 'base', pathMatch: 'full' },
  {path: 'base', component: PageContentComponent, children: [
      {path: 'courses', component: CoursesComponent},
      {path: 'books', component: BooksComponent},
      {path: 'conferences', component: ConferencesComponent},
    ]},
  {path: 'auth', component: PageAuthComponent},
  {path: '**', redirectTo: 'base'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
