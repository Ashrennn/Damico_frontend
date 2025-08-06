import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navigationItems = [
    { name: 'Home', route: '/', icon: 'fas fa-home' },
    { name: 'About', route: '/about', icon: 'fas fa-info-circle' },
    { name: 'Operations', route: '/operations', icon: 'fas fa-cogs' },
    { name: 'Bunkering', route: '/bunkering', icon: 'fas fa-ship' },
    { name: 'Library', route: '/library', icon: 'fas fa-book' },
    { name: 'DMC CSR', route: '/dmc-csr', icon: 'fas fa-heart' },
    { name: 'Contact', route: '/contact', icon: 'fas fa-envelope' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
} 