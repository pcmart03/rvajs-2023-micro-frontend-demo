import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntryComponent } from './feature/entry/entry.component';
import { SelectedBookComponent } from './ui/selected-book/selected-book.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    SelectedBookComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
