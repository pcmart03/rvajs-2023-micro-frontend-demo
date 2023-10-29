import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RemoteContainerDirective } from './directives/remote-container.directive';
import { RemoteComponent } from './remote/remote.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    RemoteContainerDirective,
    RemoteComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    // This is a weird thing. It's not picking up the remote dependency for datepicker
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    RemoteComponent
  ]
})
export class CoreModule { }
