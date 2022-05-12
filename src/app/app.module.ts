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
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    PageAuthComponent,
    CoursesComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
