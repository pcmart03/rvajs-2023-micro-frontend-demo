import {Directive, inject, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRemoteContainer]'
})
export class RemoteContainerDirective {
  public viewContainerRef = inject(ViewContainerRef);
}
