/**
 * ==========================================
 * Navbar
 * Component ID: DMC-CMP-4000
 *
 * Pill-shaped navbar with centered logo overlap.
 * ==========================================
 *
 * @description
 * Provides the main navigation bar for the DAMICO site, including main navigation links and a centered logo that overlaps the navbar pill. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-navbar></dmc-navbar>
 * ```
 *
 * @deviceTypes
 * - mobile-small  (≤320px)
 * - mobile-large (321-480px)
 * - tablet-small (481-768px)
 * - tablet-large (769-992px)
 * - laptop-small (993-1200px)
 * - laptop-large (1201-1440px)
 * - desktop-small (1441-1920px)
 * - desktop-large (>1920px)
 *
 * @lastModified 2024-06-08
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'dmc-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navLinks = [
    { label: 'About', url: '/about' },
    { label: 'Operations', url: '/operations' },
    { label: 'Library', url: '/library' },
    { label: 'Bunkering', url: '/bunkering' },
    { label: 'DMC-CSR', url: '#' },
    { label: 'Contact', url: '/contact' }
  ];

  get leftNavLinks() {
    return this.navLinks.slice(0, 3);
  }
  get rightNavLinks() {
    return this.navLinks.slice(3);
  }

  navigateTo(url: string) {
    if (url.startsWith('/')) {
      this.router.navigate([url]);
    } else {
      window.location.href = url;
    }
  }
}
