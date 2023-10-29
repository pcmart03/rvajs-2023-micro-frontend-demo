import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteComponent } from './remote.component';

describe('RemoteComponent', () => {
  let component: RemoteComponent;
  let fixture: ComponentFixture<RemoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteComponent]
    });
    fixture = TestBed.createComponent(RemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
