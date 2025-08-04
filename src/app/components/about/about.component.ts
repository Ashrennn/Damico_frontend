import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

/**
 * About Component
 * Component ID: DMC-CMP-5001
 *
 * About page with sticky left-side navigation and multiple sections.
 * ==========================================
 *
 * @description
 * Provides the About page for the DAMICO site, including sticky navigation, multiple sections, and smooth scrolling. Follows DAMICO standards for structure, naming, and documentation.
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
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  // ✅ Inject platformId properly
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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
      buttonText: 'Learn More',
      buttonAction: 'navigateToWhoWeAre'
    },
    {
      id: 'about-us',
      number: '02',
      title: 'ABOUT US',
      description: 'Welcome to Damico Energy, a trusted leader in delivering cutting-edge, sustainable energy solutions. We are driven by a commitment to innovation, reliability, and a greener future. Our mission is simple: to make clean, efficient, and affordable energy accessible to everyone.',
      buttonText: 'Read More',
      buttonAction: 'navigateToOurHistory'
    },
    {
      id: 'our-history',
      number: '03',
      title: 'OUR HISTORY',
      description: 'Founded in 2010, Damico Energy began as a small startup with a big vision. Over the years, we have grown from a local energy provider to a global leader in sustainable energy solutions, serving communities and businesses across multiple continents.',
      buttonText: 'Explore Timeline',
      buttonAction: 'navigateToOurTimeline'
    },
    {
      id: 'our-people',
      number: '04',
      title: 'OUR PEOPLE',
      description: 'Our success is built on the foundation of exceptional people. From our leadership team to our field engineers, every member of the Damico family brings unique expertise, passion, and dedication to our mission of sustainable energy innovation.',
      buttonText: 'Meet Our Team',
      buttonAction: 'navigateToOurTeam'
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.removeScrollListener();
    }
  }

  navigateToSection(sectionId: string): void {
    this.navigationItems.forEach(item => {
      item.active = item.id === sectionId;
    });

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

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

  navigateToWhoWeAre() {
    this.router.navigate(['/who-are-we']);
  }

  navigateToOurHistory() {
    this.router.navigate(['/our-history']);
  }

  navigateToOurTimeline() {
    this.router.navigate(['/our-timeline']);
  }

  navigateToOurTeam() {
    this.router.navigate(['/our-team']);
  }

  handleButtonClick(action: string) {
    switch(action) {
      case 'navigateToWhoWeAre':
        this.navigateToWhoWeAre();
        break;
      case 'navigateToOurHistory':
        this.navigateToOurHistory();
        break;
      case 'navigateToOurTimeline':
        this.navigateToOurTimeline();
        break;
      case 'navigateToOurTeam':
        this.navigateToOurTeam();
        break;
    }
  }

  private scrollHandler = () => this.onScroll();

  private setupScrollListener() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  private removeScrollListener() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}