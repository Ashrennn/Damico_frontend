import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SectionOneComponent } from '../../shared/sections/section-one/section-one.component';
import { SectionThreeComponent } from '../../shared/sections/section-three/section-three.component';
import { SectionFourComponent } from '../../shared/sections/section-four/section-four.component';

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
  imports: [
    CommonModule,
    SectionOneComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

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

  // Section data for new 4-component architecture
  heroData = {
    title: 'About Damico Energy',
    subtitle: 'Pioneering Sustainable Energy Solutions',
    backgroundImage: 'assets/images/about-hero-bg.jpg',
    showOverlay: true,
    overlayOpacity: 0.7
  };

  whoWeAreData = {
    title: 'WHO WE ARE',
    subtitle: 'Pioneering Force in Energy Sector',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'split' as const,
    imagePosition: 'left' as const,
    imageUrl: 'assets/images/who-we-are-bg.jpg',
    imageAlt: 'Who We Are'
  };

  aboutUsData = {
    title: 'ABOUT US',
    subtitle: 'Trusted Leader in Energy Solutions',
    backgroundColor: 'var(--bg-color)',
    textColor: 'var(--text-color)',
    layout: 'split' as const,
    imagePosition: 'right' as const,
    imageUrl: 'assets/images/about-us-bg.jpg',
    imageAlt: 'About Us'
  };

  ourHistoryData = {
    title: 'OUR HISTORY',
    subtitle: 'From Startup to Global Leader',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'split' as const,
    imagePosition: 'left' as const,
    imageUrl: 'assets/images/our-history-bg.jpg',
    imageAlt: 'Our History'
  };

  ourPeopleData = {
    title: 'OUR PEOPLE',
    subtitle: 'Exceptional Team, Exceptional Results',
    backgroundColor: 'var(--bg-color)',
    textColor: 'var(--text-color)',
    layout: 'cards' as const,
    columns: 3,
    gap: 'var(--spacing-6)'
  };

  teamMembers = [
    {
      name: 'Ahmed Al Mansouri',
      role: 'Chief Executive Officer',
      description: 'Leading Damico Energy with over 15 years of experience in the energy sector.',
      avatar: 'assets/images/team/ahmed-al-mansouri.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      description: 'Driving innovation and sustainable technology solutions across our operations.',
      avatar: 'assets/images/team/sarah-johnson.jpg'
    },
    {
      name: 'Mohammed Hassan',
      role: 'Chief Operations Officer',
      description: 'Ensuring operational excellence and efficiency in all our energy projects.',
      avatar: 'assets/images/team/mohammed-hassan.jpg'
    }
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

  // Navigation methods for buttons
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

  // Handle button clicks
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

  onSectionClick() {
    console.log('Section clicked!');
  }
}
