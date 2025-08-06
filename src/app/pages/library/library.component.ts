import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOneComponent } from '../../shared/sections/section-one/section-one.component';
import { SectionTwoComponent } from '../../shared/sections/section-two/section-two.component';
import { SectionThreeComponent } from '../../shared/sections/section-three/section-three.component';
import { SectionFourComponent } from '../../shared/sections/section-four/section-four.component';

/**
 * Library Component
 * Component ID: DMC-CMP-5003
 *
 * Library page with hero, feature cards, grid, 'Be Kind' section, and footer.
 * ==========================================
 *
 * @description
 * Provides the Library page for the DAMICO site, including hero, feature cards, grid, 'Be Kind' section, special thanks, and footer. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-library></dmc-library>
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
  selector: 'dmc-library',
  standalone: true,
  imports: [
    CommonModule,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  hero = {
    title: 'Welcome to Damico Group',
    subtitle: 'Excellence in oil exports, lubrication and community impact.',
    date: 'Tuesday, April 1, 2025',
    location: 'Dubai (AMC)',
    clock: true
  };

  features = [
    { title: 'DamiLube Lubricants', desc: 'High-performance lubricants for every industry.' },
    { title: 'Matchstick Production', desc: 'Safe and sustainable matchsticks for global use.' },
    { title: 'Mohade Foundation', desc: 'Empowering communities through impactful charity.' }
  ];

  gridCards = [
    { title: 'Global Energy Solutions', image: 'assets/library/energy.jpg' },
    { title: 'DamiLube High-Performance Lubricants', image: 'assets/library/lubricants.jpg' },
    { title: 'Sustainability at Heart', image: 'assets/library/sustainability.jpg' },
    { title: 'Eco-Friendly Matchsticks for a Greener Tomorrow', image: 'assets/library/matchsticks.jpg' },
    { title: 'Empowering Communities: Mohade Foundation', image: 'assets/library/empowering.jpg' },
    { title: 'Transparency in Oil Exports', image: 'assets/library/transparency.jpg' }
  ];

  beKind = {
    image: 'assets/library/be-kind.jpg',
    text: 'Be Kind'
  };

  mohade = {
    title: 'For the Love of Mohade',
    desc: '“She was my light, my strength, and my endless source of inspiration. Mohade believed that no act of kindness was too small; no dream too far to reach. Her heart embraced the world, and her hands worked tirelessly to make it better.”\n\nThe Mohade Charity Foundation is her legacy—a testament to her unwavering compassion and dedication to those in need. Through this foundation, her love continues to shine, touching countless lives and spreading hope where it is most needed.\n\nThis is not just her story—it is the story of everyone who believes in the power of giving. Together, we carry her dream forward.'
  };

  specialThanks = {
    title: 'Special Thanks',
    desc: 'We deeply appreciate Az Corp Inc for their trust, unwavering support, and shared belief in Damico’s mission to create sustainable and impactful solutions for global progress.'
  };

  bottomCards = [
    { title: 'Building a Sustainable Future', desc: 'Damico leads with innovation and sustainability, advancing energy solutions that empower global communities, build lasting partnerships, and drive progress. It creates fuel for a brighter and better future.' },
    { title: 'Empowering Communities', desc: 'At Damico, we are committed to uplifting communities, empowering people, and making meaningful differences globally through innovative energy solutions and accessible, sustainable technologies.' },
    { title: 'Visionary Leadership', desc: 'The future belongs to those who believe in their dreams. Damico embraces this with determination, ambition, and transformative intention for a better tomorrow.' }
  ];

  // Section data for new 4-component architecture
  heroData = {
    title: 'Welcome to Damico Group',
    subtitle: 'Excellence in oil exports, lubrication and community impact.',
    backgroundImage: 'assets/library/hero-bg.jpg',
    showOverlay: true,
    overlayOpacity: 0.7
  };

  featuresData = {
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for every industry',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'grid' as const,
    columns: 3,
    gap: 'var(--spacing-6)'
  };

  gridData = {
    title: 'Our Portfolio',
    subtitle: 'Discover our diverse range of solutions',
    backgroundColor: 'var(--bg-color)',
    textColor: 'var(--text-color)',
    layout: 'cards' as const,
    columns: 3,
    gap: 'var(--spacing-6)'
  };

  mohadeData = {
    title: 'For the Love of Mohade',
    subtitle: 'A legacy of compassion and hope',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'split' as const,
    imagePosition: 'left' as const,
    imageUrl: 'assets/library/be-kind.jpg',
    imageAlt: 'Be Kind'
  };

  onSectionClick() {
    console.log('Section clicked!');
  }
}