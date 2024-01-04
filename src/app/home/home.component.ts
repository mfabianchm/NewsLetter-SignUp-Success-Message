import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  mail = '';
  error = false;
  home_img = '../assets/illustration-sign-up-desktop.svg';
  ngOnInit(): void {
    if (window.innerWidth < 996) {
      this.home_img = '../assets/illustration-sign-up-mobile.svg';
    } else {
      this.home_img = '../assets/illustration-sign-up-desktop.svg';
    }
  }
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 996) {
      this.home_img = '../assets/illustration-sign-up-mobile.svg';
    } else {
      this.home_img = '../assets/illustration-sign-up-desktop.svg';
    }
  }
}
