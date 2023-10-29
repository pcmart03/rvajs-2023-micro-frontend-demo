import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntryComponent } from './feature/entry/entry.component';
import { ProfileComponent } from './ui/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
  ],
  imports: [
    BrowserModule,
    ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
