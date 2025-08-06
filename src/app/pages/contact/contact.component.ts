import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionOneComponent } from '../../shared/sections/section-one/section-one.component';
import { SectionFourComponent } from '../../shared/sections/section-four/section-four.component';

/**
 * Contact Component
 * Component ID: DMC-CMP-5005
 *
 * Contact page with welcome card, newsletter signup, background image, social icons, and footer.
 * ==========================================
 *
 * @description
 * Provides the Contact page for the DAMICO site, including welcome card, newsletter signup, background image, social icons, and footer. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-contact></dmc-contact>
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
  selector: 'dmc-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    SectionOneComponent,
    SectionFourComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  background = 'assets/contact/wood-bg.jpg';
  welcome = {
    title: 'Welcome to Damico.',
    desc: `Don't miss out! Be the first to hear about exclusive updates, tips, and exciting news. Sign up for our newsletter today!`,
    socials: [
      { icon: 'fa fa-envelope', url: '#' },
      { icon: 'fa fa-youtube', url: '#' },
      { icon: 'fa fa-blog', url: '#' }
    ]
  };
  newsletter = {
    name: '',
    email: ''
  };

  // Section data for new 4-component architecture
  heroData = {
    title: 'Get in Touch',
    subtitle: 'We\'d love to hear from you',
    backgroundImage: 'assets/contact/wood-bg.jpg',
    showOverlay: true,
    overlayOpacity: 0.6
  };

  contactData = {
    title: 'Contact Information',
    subtitle: 'Connect with us',
    backgroundColor: 'var(--bg-light)',
    textColor: 'var(--text-color)',
    layout: 'contact' as const
  };

  onSectionClick() {
    console.log('Section clicked!');
  }

  onSubmitNewsletter() {
    console.log('Newsletter signup:', this.newsletter);
    // Handle newsletter signup
  }
}