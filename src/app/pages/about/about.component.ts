import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * About Component
 * Component ID: DMC-CMP-5001
 *
 * About page with hero section, content sections, and side navigation.
 * ==========================================
 *
 * @description
 * Provides the About page for the DAMICO site, including hero section, multiple content sections, and sticky side navigation. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-about></dmc-about>
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
@Component({
  selector: 'dmc-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  /**
   * Navigation items for the side navigation
   */
  navigationItems = [
    { id: 'who-we-are', label: 'Who We Are', active: true },
    { id: 'about-us', label: 'About Us', active: false },
    { id: 'our-history', label: 'Our History', active: false },
    { id: 'our-people', label: 'Our People', active: false }
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.setupScrollListener();
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      this.removeScrollListener();
    }
  }

  /**
   * Navigate to a specific section and update active state
   * @param sectionId - The ID of the section to navigate to
   */
  navigateToSection(sectionId: string): void {
    // Update active state
    this.navigationItems.forEach(item => {
      item.active = item.id === sectionId;
    });

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Handle scroll events to update active navigation item
   */
  onScroll(): void {
    if (typeof window === 'undefined') return;
    
    const sections = ['who-we-are', 'about-us', 'our-history', 'our-people'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.navigationItems.forEach(item => {
            item.active = item.id === sectionId;
          });
        }
      }
    });
  }

  private setupScrollListener() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.onScroll());
    }
  }

  private removeScrollListener() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', () => this.onScroll());
    }
  }
}
