import { Component, OnInit } from '@angular/core';
import { Router ,RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const loginUser = localStorage.getItem('loginUser');
    if (!loginUser) {
      this.router.navigate(['/']);
    }
  }

  logOut(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('/')
  }
}