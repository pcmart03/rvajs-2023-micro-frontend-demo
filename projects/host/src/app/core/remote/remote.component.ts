import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { loadRemoteModule } from "@angular-architects/module-federation";
import {MfRemoteEntryComponent, MfDispatchFn, MfListenForFn} from "../../../../../../dist/event-bus/lib/interfaces";
import {RemoteContainerDirective} from "../directives/remote-container.directive";

@Component({
  selector: 'app-remote',
  template: `
      <ng-template appRemoteContainer></ng-template>

      <ng-container *ngIf="componentLoadError">
          <p>There was a problem loading this component</p>
      </ng-container>

      <mat-spinner *ngIf="loadingRemote" mode="indeterminate"></mat-spinner>
  `
})
export class RemoteComponent implements MfRemoteEntryComponent, AfterViewInit{
  @Input() dispatch: MfDispatchFn | null= null
  @Input() listenFor: MfListenForFn | null = null
  @Input({required: true}) remote = '';

  @ViewChild(RemoteContainerDirective, {static: true})
  remoteHost!: RemoteContainerDirective;

  componentLoadError = false;
  loadingRemote = true;

  ngAfterViewInit() {
    this.loadRemote();
  }

  loadRemote() {
    const {viewContainerRef} = this.remoteHost;
    loadRemoteModule(this.remote, './Component').then((m) => {
      const { EntryComponent } = m;
      const componentRef =
        viewContainerRef.createComponent(EntryComponent);
      const componentInstance =
        componentRef.instance as MfRemoteEntryComponent;
      if (this.dispatch) {
        componentInstance.dispatch = this.dispatch;
      }
      if (this.listenFor) {
        componentInstance.listenFor = this.listenFor
      }
    }).catch((_) => {
      this.componentLoadError = true;
    }).finally(() => {
      this.loadingRemote = false;
    })
  }
}
