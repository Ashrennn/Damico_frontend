import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Contact Component
 * Component ID: DMC-CMP-5005
 *
 * Contact page with newsletter signup and contact form sections.
 * ==========================================
 *
 * @description
 * Provides the Contact page for the DAMICO site, including newsletter signup form and contact form with company information.
 *
 * @usage
 * ```html
 * <dmc-contact></dmc-contact>
 * ```
 *
 * @lastModified 2024-06-08
 */
@Component({
  selector: 'dmc-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  newsletter = {
    name: '',
    email: ''
  };

  contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  onSubmitNewsletter() {
    console.log('Newsletter signup:', this.newsletter);
    // Handle newsletter signup
    alert('Thank you for signing up to our newsletter!');
    this.newsletter.name = '';
    this.newsletter.email = '';
  }

  onSubmitContact() {
    console.log('Contact form submission:', this.contactForm);
    // Handle contact form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.contactForm = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    };
  }
}
