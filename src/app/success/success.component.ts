import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
})
export class SuccessComponent implements OnInit {
  constructor(private router: Router) {
    this.mail = this.router.getCurrentNavigation()?.extras.state;
  }
  mail;
  ngOnInit(): void {
    this.mail = history.state.value;
  }
  dismissMessage() {
    this.router.navigate(['/']);
  }
}
