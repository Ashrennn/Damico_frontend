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
  isHeaderVisible = true;
  private lastScrollY = 0;

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
    const currentScrollY = window.scrollY;
    this.isScrolled = currentScrollY > 50;
    
    // Only show header when actually at the top of the page
    if (currentScrollY <= 50) {
      this.isHeaderVisible = true;
    } else {
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > this.lastScrollY) {
        // Scrolling down
        this.isHeaderVisible = false;
      } else if (currentScrollY < this.lastScrollY) {
        // Scrolling up
        this.isHeaderVisible = true;
      }
    }
    
    this.lastScrollY = currentScrollY;
  }
} 
