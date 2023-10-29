import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {ApiService} from "../../data-access/api-service/api.service";
import {Profile} from "../../interfaces/profile.interface";
import {take} from "rxjs";

@Component({
  selector: 'app-profile',
  template: `
      <h2>Profile</h2>
      <form *ngIf="editing; else profile" [formGroup]="profileForm" class="profile-form">
          <div class="profile-form-row">
              <mat-form-field>
                  <mat-label>Username</mat-label>
                  <input matInput formControlName="userName"/>
              </mat-form-field>
              <mat-form-field>
                  <mat-label>Date of birth</mat-label>
                  <input matInput [matDatepicker]="picker" formControlName="dateOfBirth"/>
                  <mat-hint>MM/DD/YYYY</mat-hint>
                  <mat-datepicker-toggle [for]="picker" matIconSuffix/>
                  <mat-datepicker #picker/>
              </mat-form-field>
          </div>
          <div class="profile-form-row submit-button-row">
              <button
                  mat-raised-button color="primary"
                  [disabled]="profileForm.invalid"
                  (click)="submitForm()"
              >Submit</button>
          </div>
      </form>
      <ng-template #profile>
          
      </ng-template>
  `,
  styles: [`
    .profile-form {
      width: 41%;
    }
    .profile-form-row {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;
    }
    .submit-button-row {
      margin-top: 2rem;
      justify-content: flex-end;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  @Output() profileSaved = new EventEmitter();
  editing = true;
  profileForm = this.fb.group({
    userName: this.fb.control('', Validators.required),
    dateOfBirth: this.fb.control('', Validators.required)
  })

  submitForm() {
    const profile = this.profileForm.getRawValue() as Profile;
    this.api.postProfile(profile)
      .pipe(take(1))
      .subscribe({
        next: (_) => this.profileSaved.emit()
      })
  }
}
