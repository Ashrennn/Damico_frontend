import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Contact Component
 * Component ID: DMC-CMP-5005
 *
 * Contact page with newsletter signup and footer sections.
 * ==========================================
 *
 * @description
 * Provides the Contact page for the DAMICO site, including newsletter signup form and footer with company information.
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

  onSubmitNewsletter() {
    console.log('Newsletter signup:', this.newsletter);
    // Handle newsletter signup
    alert('Thank you for signing up to our newsletter!');
    this.newsletter.name = '';
    this.newsletter.email = '';
  }
}
