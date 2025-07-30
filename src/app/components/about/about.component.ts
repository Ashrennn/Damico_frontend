import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * About Component
 * Component ID: DMC-CMP-5001
 *
 * Comprehensive About page with multiple sections and floating navigation
 */
@Component({
  selector: 'dmc-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  /**
   * Navigation items for the floating sidebar
   */
  navigationItems = [
    { id: 'who-we-are', label: 'Who We Are', active: false },
    { id: 'about-us', label: 'About Us', active: true },
    { id: 'our-history', label: 'Our History', active: false },
    { id: 'our-people', label: 'Our People', active: false }
  ];

  /**
   * Section data for each about section
   */
  sections = [
    {
      id: 'who-we-are',
      number: '01',
      title: 'WHO WE ARE',
      description: 'Damico Energy is a pioneering force in the energy sector, dedicated to transforming how the world thinks about and uses energy. We are a team of passionate innovators, engineers, and visionaries committed to creating sustainable solutions that power the future.',
      buttonText: 'Learn More'
    },
    {
      id: 'about-us',
      number: '02',
      title: 'ABOUT US',
      description: 'Welcome to Damico Energy, a trusted leader in delivering cutting-edge, sustainable energy solutions. We are driven by a commitment to innovation, reliability, and a greener future. Our mission is simple: to make clean, efficient, and affordable energy accessible to everyone.',
      buttonText: 'Read More'
    },
    {
      id: 'our-history',
      number: '03',
      title: 'OUR HISTORY',
      description: 'Founded in 2010, Damico Energy began as a small startup with a big vision. Over the years, we have grown from a local energy provider to a global leader in sustainable energy solutions, serving communities and businesses across multiple continents.',
      buttonText: 'Explore Timeline'
    },
    {
      id: 'our-people',
      number: '04',
      title: 'OUR PEOPLE',
      description: 'Our success is built on the foundation of exceptional people. From our leadership team to our field engineers, every member of the Damico family brings unique expertise, passion, and dedication to our mission of sustainable energy innovation.',
      buttonText: 'Meet Our Team'
    }
  ];

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
    const sections = this.sections.map(s => document.getElementById(s.id));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.navigationItems.forEach(item => {
            item.active = item.id === this.sections[index].id;
          });
        }
      }
    });
  }

  /**
   * Initialize scroll listener on component mount
   */
  ngOnInit(): void {
    window.addEventListener('scroll', () => this.onScroll());
  }

  /**
   * Clean up scroll listener on component destroy
   */
  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.onScroll());
  }
}
