import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginGroupForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Hello');
    if (this.loginGroupForm.invalid) {
      return;
    }

    this.authService.signIn(this.loginGroupForm.value).subscribe({
      next: () => {},
      error: ({ error }) => {
        if (error.username || error.password) {
          this.loginGroupForm.setErrors({ credentials: true });
        }
      },
    });
  }
}
