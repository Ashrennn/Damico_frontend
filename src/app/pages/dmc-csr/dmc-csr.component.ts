import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOneComponent } from '../../shared/sections/section-one/section-one.component';
import { SectionTwoComponent } from '../../shared/sections/section-two/section-two.component';
import { SectionThreeComponent } from '../../shared/sections/section-three/section-three.component';
import { SectionFourComponent } from '../../shared/sections/section-four/section-four.component';

/**
 * DMC-CSR Component
 * Component ID: DMC-CMP-5006
 *
 * DMC-CSR page with multiple sections: hero, corporate profile, what we offer, and global offices.
 * ==========================================
 *
 * @description
 * Provides the DMC-CSR page for the DAMICO site, including hero with plant watering scene, corporate profile section, what we offer section, and global offices section. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-dmc-csr></dmc-dmc-csr>
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
  selector: 'dmc-dmc-csr',
  standalone: true,
  imports: [
    CommonModule,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],
  templateUrl: './dmc-csr.component.html',
  styleUrls: ['./dmc-csr.component.scss']
})
export class DmcCsrComponent {
  hero = {
    background: '/assets/dmc-csr/plant-watering-bg.jpg',
    title: 'You can build a better tomorrow with Damico.',
    desc: 'At Damico, we believe in quality, sustainability, and innovation. Our commitment to excellence empowers individuals and businesses to achieve their goals.',
    buttons: [
      { label: 'Learn More', url: '#' },
      { label: 'Customer Log in', url: '#' }
    ],
    stats: [
      { label: 'Executed Trades every month', value: '7+' },
      { label: 'Daily Inquiries', value: '10+' },
      { label: 'List of customer base', value: '12+' },
      { label: 'Vessel Owned', value: '3+' }
    ]
  };

  corporateProfile = {
    background: 'assets/dmc-csr/beach-bg.jpg',
    title: 'Corporate Profile',
    date: 'Damico is growing to this date of Apr 01, 2025',
    desc: 'Look at our company\'s growth and achievements. Download our corporate profile.',
    button: { label: 'Corporate Profile', url: '#' },
    cards: [
      { image: 'assets/dmc-csr/damilube.webp', title: 'Damilube' },
      { image: 'assets/dmc-csr/bunker-trade.webp', title: 'Bunker Trade' },
      { image: 'assets/dmc-csr/vessel-brokerage.jpg', title: 'Vessel Brokerage' },
      { image: 'assets/dmc-csr/trade-desk.png', title: 'Trade Desk' }
    ]
  };

  whatWeOffer = {
    background: 'assets/dmc-csr/beach-bg.jpg',
    title: 'What We Offer?',
    desc: 'We offer a wide range of products and services including fuels from crude oil and custom blend mixtures. Our in-house refining capability ensures quality and consistency.',
    button: { label: 'Explore Products & Services', url: '#' },
    products: [
      { image: '/assets/dmc-csr/kerosene.jpg', title: 'Kerosene' },
      { image: '/assets/dmc-csr/lubricant-oil.jpg', title: 'Lubricant Oil' },
      { image: '/assets/dmc-csr/base-oil.jpeg', title: 'Base Oil' }
    ]
  };

  globalOffices = {
    background: 'assets/dmc-csr/beach-bg.jpg',
    title: 'Our Global Offices',
    map: '/assets/dmc-csr/world-map.png'
  };

  // Section data for new 4-component architecture
  heroData = {
    title: 'You can build a better tomorrow with Damico.',
    subtitle: 'At Damico, we believe in quality, sustainability, and innovation. Our commitment to excellence empowers individuals and businesses to achieve their goals.',
    backgroundImage: 'assets/dmc-csr/plant-watering-bg.jpg',
    showOverlay: true,
    overlayOpacity: 0.6
  };

  corporateData = {
    title: 'Corporate Profile',
    subtitle: 'Damico is growing to this date of Apr 01, 2025',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'grid' as const,
    columns: 2,
    gap: 'var(--spacing-8)'
  };

  servicesData = {
    title: 'What We Offer?',
    subtitle: 'We offer a wide range of products and services including fuels from crude oil and custom blend mixtures. Our in-house refining capability ensures quality and consistency.',
    backgroundColor: 'var(--bg-color)',
    textColor: 'var(--text-color)',
    layout: 'cards' as const,
    columns: 3,
    gap: 'var(--spacing-6)'
  };

  officesData = {
    title: 'Our Global Offices',
    subtitle: 'Worldwide presence and local expertise',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'split' as const,
    imagePosition: 'right' as const,
    imageUrl: 'assets/dmc-csr/world-map.png',
    imageAlt: 'World Map'
  };

  onSectionClick() {
    console.log('Section clicked!');
  }
}
