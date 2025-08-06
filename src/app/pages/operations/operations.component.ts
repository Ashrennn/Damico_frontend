import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionOneComponent } from '../../shared/sections/section-one/section-one.component';
import { SectionTwoComponent } from '../../shared/sections/section-two/section-two.component';
import { SectionThreeComponent } from '../../shared/sections/section-three/section-three.component';
import { SectionFourComponent } from '../../shared/sections/section-four/section-four.component';

/**
 * Operations Component
 * Component ID: DMC-CMP-5002
 *
 * Operations page with vessel search, stats, features, vessel cards, and footer.
 * ==========================================
 *
 * @description
 * Provides the Operations page for the DAMICO site, including vessel search, stats, features, vessel cards, help section, and footer. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-operations></dmc-operations>
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
  selector: 'dmc-operations',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  // Data for hero section
  hero = {
    title: 'Let us help you Buy, Charter, or Sell a Ship',
    subtitle: 'Choose from our wide range of services for buying, selling, or chartering vessels to match your business needs.',
    image: 'assets/operations/ship-hero.jpg',
    tabs: ['Buy', 'Charter', 'Sell'],
    activeTab: 'Charter',
    search: {
      location: '',
      vesselType: '',
      capacity: ''
    }
  };

  // Stats
  stats = [
    { value: '15+', label: 'Ships Available' },
    { value: '10+', label: 'Ports Covered' },
    { value: '5+', label: 'New Launches' }
  ];

  // Why Choose Us features
  features = [
    { icon: 'expert', title: 'Expert Guidance', desc: 'Our experienced team ensures you receive professional advice and support at every step of the brokerage process.' },
    { icon: 'reliable', title: 'Reliable Deals', desc: 'We connect you with verified vessel sellers to guarantee transparent and secure transactions.' },
    { icon: 'global', title: 'Global Access', desc: 'With access to a worldwide network, we help you find vessels that match your specifications and budget.' },
    { icon: 'support', title: '24/7 Support', desc: 'Our dedicated customer support team is available 24/7 to address your queries and provide seamless assistance.' }
  ];

  // Vessel cards
  vessels = [
    {
      type: 'Bulk Carrier',
      desc: 'High-capacity bulk carrier, perfect for transporting heavy cargo.',
      dwt: '65,000 DWT',
      age: '10 Years',
      location: 'Rotterdam, NL',
      price: '$32,800,000',
      image: 'assets/operations/bulk-carrier.jpg'
    },
    {
      type: 'Container Ship',
      desc: 'Modern container ship with excellent cargo capacity and efficiency.',
      dwt: '45,000 DWT',
      age: '3 Years',
      location: 'Hamburg, DE',
      price: '$45,600,000',
      image: 'assets/operations/container-ship.jpg'
    },
    {
      type: 'Offshore Vessel',
      desc: 'Offshore support vessel with cutting-edge technology for complex operations.',
      dwt: '25,000 DWT',
      age: '7 Years',
      location: 'Dubai, UAE',
      price: '$38,700,000',
      image: 'assets/operations/offshore-vessel.jpg'
    }
  ];

  // Help section
  help = {
    title: 'Are You Unsure About Your Vessel Selection?',
    desc: 'Do you need expert guidance in choosing the right vessel? Or are you not sure what you are looking for? Explore our extensive library of vessels or let us help you research further to find the perfect match.',
    button: 'Explore Our Library',
    images: ['assets/operations/vessel-lib-1.jpg', 'assets/operations/vessel-lib-2.jpg']
  };

  // Footer data (can be reused from home/footer)

  // Section data for new 4-component architecture
  heroData = {
    title: 'Let us help you Buy, Charter, or Sell a Ship',
    subtitle: 'Choose from our wide range of services for buying, selling, or chartering vessels to match your business needs.',
    backgroundImage: 'assets/operations/ship-hero.jpg',
    showOverlay: true,
    overlayOpacity: 0.5
  };

  statsData = {
    title: 'Our Fleet Statistics',
    subtitle: 'Comprehensive vessel solutions',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'grid' as const,
    columns: 3,
    gap: 'var(--spacing-6)'
  };

  featuresData = {
    title: 'Why Choose Us?',
    subtitle: 'We provide tailored vessel brokerage services, ensuring you find the perfect vessel for your needs with ease and reliability.',
    backgroundColor: 'var(--bg-color)',
    textColor: 'var(--text-color)',
    layout: 'grid' as const,
    columns: 2,
    gap: 'var(--spacing-8)'
  };

  vesselsData = {
    title: 'Available Vessels',
    subtitle: 'Browse our selection of quality vessels',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'cards' as const,
    columns: 3,
    gap: 'var(--spacing-6)'
  };

  helpData = {
    title: 'Need Expert Guidance?',
    subtitle: 'Get professional advice for your vessel selection',
    backgroundColor: 'var(--bg-color)',
    textColor: 'var(--text-color)',
    layout: 'split' as const,
    imagePosition: 'right' as const,
    imageUrl: 'assets/operations/vessel-lib-1.jpg',
    imageAlt: 'Vessel Library'
  };

  onSectionClick() {
    console.log('Section clicked!');
  }

  onSearch() {
    console.log('Search:', this.hero.search);
  }
}