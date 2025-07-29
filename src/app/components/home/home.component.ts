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
    { title: 'Marine Fuel Supply', date: '15 MAR' },
    { title: 'Trade Operations', date: '20 APR' },
    { title: 'Vessel Brokerage', date: '10 MAY' },
    { title: 'Lubricant Distribution', date: '05 JUN' },
    { title: 'Technical Services', date: '15 JUL' }
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
      { image: 'assets/find-vessel.jpg', title: 'Find Your Vessel!', description: 'Discover the perfect vessel for your needs' },
      { image: 'assets/charter-flexibility.jpg', title: 'Charter with Flexibility', description: 'Flexible chartering solutions' },
      { image: 'assets/expert-support.jpg', title: 'Trusted Expert Support', description: 'Professional guidance and support' }
    ]
  };

  // DAMILUBE Products Data
  damilubeProducts = [
    { name: 'ENGINE COOLANT', image: 'assets/engine-coolant.jpg' },
    { name: 'ENGINE FLUSH', image: 'assets/engine-flush.jpg' },
    { name: 'LUBRICANTS', image: 'assets/lubricants.jpg' },
    { name: 'GAS OIL', image: 'assets/gas-oil.jpg' },
    { name: 'LNG', image: 'assets/lng.jpg' }
  ];

  // Footer Data
  footerData = {
    company: {
      title: 'COMPANY',
      links: ['About', 'News & Contact', 'Careers']
    },
    services: {
      title: 'SERVICES',
      links: ['Fuel', 'Vessel Brokerage', 'Bunker Trade', 'Technical']
    },
    address: {
      title: 'ADDRESS',
      content: 'Dubai, UAE\nContact: +971 4 XXX XXXX\nEmail: info@damico.com'
    }
  };
}
