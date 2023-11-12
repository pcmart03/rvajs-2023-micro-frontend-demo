import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../data-access/api-service/api.service";
import {Profile} from "../../interfaces/profile.interface";
import {take} from "rxjs";
import {genres} from "../../interfaces/genre.type";

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
                  <mat-label>Favorite Genre</mat-label>
                  <mat-select formControlName="favoriteGenre">
                      <mat-option *ngFor="let genre of genres" [value]="genre">{{genre}}</mat-option>
                  </mat-select>
              </mat-form-field>
              <div class="profile-submit-button">
                  <button

                      mat-raised-button color="primary"
                      [disabled]="profileForm.invalid"
                      (click)="submitForm()"
                  >Submit
                  </button>
              </div>
          </div>
      </form>
      <ng-template #profile>
          
      </ng-template>
  `,
  styles: [`
    .profile-form {
      max-width: 50%;
    }
    .profile-form-row {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;
    }
    .profile-submit-button {
      padding-block-start: 0.75rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  @Output() profileSaved = new EventEmitter();

  genres = genres;
  editing = true;

  profileForm = this.fb.group({
    userName: this.fb.control('', Validators.required),
    favoriteGenre: this.fb.control('', Validators.required)
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
