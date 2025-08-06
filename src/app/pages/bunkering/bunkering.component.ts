import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionOneComponent } from '../../shared/sections/section-one/section-one.component';
import { SectionFourComponent } from '../../shared/sections/section-four/section-four.component';

/**
 * Bunkering Component
 * Component ID: DMC-CMP-5004
 *
 * Bunkering page with SAP login card, background image, and footer.
 * ==========================================
 *
 * @description
 * Provides the Bunkering page for the DAMICO site, including SAP login card, background image, and footer. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-bunkering></dmc-bunkering>
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
  selector: 'dmc-bunkering',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    SectionOneComponent,
    SectionFourComponent
  ],
  templateUrl: './bunkering.component.html',
  styleUrls: ['./bunkering.component.scss']
})
export class BunkeringComponent {
  background = 'assets/bunkering/beach-bg.jpg';
  sap = {
    logo: 'assets/bunkering/sap-logo.png',
    title: 'SAP Integrated Solution',
    subtitle: 'Experience our realtime Updates!',
    desc: 'Damico has integrated real-time tracking and management software across all its bases, ensuring efficiency, accuracy, and optimized performance for seamless operations and enhanced decision-making.'
  };
  login = {
    email: '',
    password: '',
    remember: false
  };

  // Section data for new 4-component architecture
  heroData = {
    title: 'SAP Integrated Solution',
    subtitle: 'Experience our realtime Updates!',
    backgroundImage: 'assets/bunkering/beach-bg.jpg',
    showOverlay: true,
    overlayOpacity: 0.6
  };

  loginData = {
    title: 'Login to SAP System',
    subtitle: 'Access your bunkering dashboard',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'contact' as const
  };

  onSectionClick() {
    console.log('Section clicked!');
  }

  onSubmitLogin() {
    console.log('Login:', this.login);
    // Handle login
  }
}