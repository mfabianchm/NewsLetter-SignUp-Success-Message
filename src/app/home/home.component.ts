import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  mail = '';
  error = false;
  save(mail: string, f: NgForm) {
    if (f.invalid) {
      this.error = true;
    } else {
      this.mail = mail;
      this.router.navigate(['/success'], {
        state: { value: this.mail },
      });
    }
  }
}
