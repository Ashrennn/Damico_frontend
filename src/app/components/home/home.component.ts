import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ==========================================
 * Home Page
 * Component ID: DMC-CMP-5000
 *
 * Main home page with hero section, services, and product showcases.
 * ==========================================
 *
 * @description
 * Provides the main home page for the DAMICO site, featuring hero section with Damilube product,
 * UAE bunker responder section, services list, loaded vessels counter, ship owner section,
 * DAMILUBE product showcase, and footer. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-home></dmc-home>
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
  selector: 'dmc-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Hero Section Data
  heroData = {
    title: 'Damilube',
    description: 'Premium engine coolant oil designed for optimal performance and protection in demanding marine environments.',
    buttonText: 'DISCOVER MORE'
  };

  // UAE Bunker Responder Data
  uaeBunkerData = {
    title: 'Discover the UAE\'s Immediate Bunker responder',
    flagImage: 'assets/uae-flag.png',
    cards: [
      { image: 'assets/ships-docked.jpg', alt: 'Ships docked' },
      { image: 'assets/logistics-truck.jpg', alt: 'Logistics truck' },
      { image: 'assets/supply-cart.jpg', alt: 'Supply cart' }
    ]
  };

  // Services List Data
  servicesData = [
  {
    icon: 'assets/icons/marine-fuel.jpg',
    title: 'Marine Fuel Supply',
    subtitle: 'MENA Region',
    description:
      'Specialized in providing high-quality marine fuel solutions across the MENA region, ensuring reliable and efficient bunkering services for vessels.',
    dateDay: '15',
    dateMonth: 'MAR',
  },
  {
    icon: 'assets/icons/trade-operations.jpg',
    title: 'Trade Operations',
    subtitle: 'Global Markets',
    description:
      'Advanced trading desk operations managing commodity flows and risk exposure across international markets with cutting-edge technology.',
    dateDay: '20',
    dateMonth: 'APR',
  },
  {
    icon: 'assets/icons/vessel-brokerage.jpg',
    title: 'Vessel Brokerage',
    subtitle: 'Maritime Services',
    description:
      'Professional vessel brokerage services offering comprehensive solutions for maritime transportation and chartering needs.',
    dateDay: '10',
    dateMonth: 'MAY',
  },
  {
    icon: 'assets/icons/lubricant-distribution.jpg',
    title: 'Lubricant Distribution',
    subtitle: 'Premium Products',
    description:
      'Distribution of high-performance marine lubricants, ensuring optimal engine performance and reliability for marine vessels.',
    dateDay: '05',
    dateMonth: 'JUN',
  },
  {
    icon: 'assets/icons/technical-services.jpg',
    title: 'Technical Services',
    subtitle: 'Expert Solutions',
    description:
      'Comprehensive technical support and consulting services for marine fuel management and optimization.',
    dateDay: '15',
    dateMonth: 'JUL',
  },
];

  // Loaded Vessels Data
  vesselsData = {
    count: '1,234',
    description: 'Loaded Vessels for this year (APRIL / 2025)',
    buttonText: 'Product & Service'
  };

  // Ship Owner Section Data
  shipOwnerData = {
    title: 'Become a Ship Owner',
    subtitle: 'Navigating Success:',
    description: 'Join our network of successful ship owners and benefit from our comprehensive maritime services and expert support.',
    cards: [
      { image: 'assets/icons/marine-fuel.jpg', title: 'Find Your Vessel!', description: 'Discover the perfect vessel for your needs' },
      { image: 'assets/icons/vessel-brokerage.jpg', title: 'Charter with Flexibility', description: 'Flexible chartering solutions' },
      { image: 'assets/icons/trade-operations.jpg', title: 'Trusted Expert Support', description: 'Professional guidance and support' }
    ]
  };

  // DAMILUBE Products Data
  damilubeProducts = [
  { name: 'ENGINE COOLANT', image: 'assets/engine-coolant.jpg' },
  { name: 'ENGINE FLUSH', image: 'assets/engine-flush.jpg' },
  { name: 'LUBRICANTS', image: 'assets/lubricants.jpg' },
  { name: 'GAS OIL', image: 'assets/gas-oil.jpg' },
  { name: 'LNG', image: 'assets/lng.png' }
];
  // Footer Data
  footerData = {
  company: {
    title: 'COMPANY',
    links: ['About', 'News & Content', 'Careers', 'Contact']
  },
  services: {
    title: 'SERVICES',
    links: ['Damilube', 'Vessel Brokerage', 'Bunker Trade', 'Trade Desk']
  },
  address: {
    title: 'ADDRESS',
    content: 'Damico Energy\nHamriyah Free Zone\nSharjah – UAE\n274452'
  }
};

}
