import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {PageContentComponent} from './page-content/page-content.component';
import {PageAuthComponent} from './page-auth/page-auth.component';
import {MatCardModule} from '@angular/material/card';
import {CoursesComponent} from './page-content/courses/courses.component';
import {BooksComponent} from './page-content/books/books.component';
import {ConferencesComponent} from './page-content/conferences/conferences.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    PageAuthComponent,
    CoursesComponent,
    BooksComponent,
    ConferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
