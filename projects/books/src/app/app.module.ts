import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './ui/books/books.component';

import { MatTableModule } from '@angular/material/table';
import { EntryComponent } from './feature/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
