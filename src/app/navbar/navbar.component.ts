import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarCollapsed = true;



  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks) {
      navbarLinks.classList.toggle('active');
    }
  }
}
