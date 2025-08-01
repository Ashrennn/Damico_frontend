import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Who Are We Component
 * Component ID: DMC-CMP-5007
 *
 * Who Are We page accessible from About component's "Learn More" button.
 * ==========================================
 *
 * @description
 * Provides the Who Are We page for the DAMICO site, accessible from the About component. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-who-are-we></dmc-who-are-we>
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
  selector: 'dmc-who-are-we',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.css']
})
export class WhoAreWeComponent {
  hero = {
    title: 'Who We Are!',
    description: 'Damico Energy is a pioneering force in the energy sector, dedicated to transforming how the world thinks about and uses energy. We are a team of passionate innovators, engineers, and visionaries committed to creating sustainable solutions that power the future.',
    background: 'assets/who-are-we/hero-bg.jpg'
  };

  culture = {
    title: 'OUR CULTURE',
    background: 'assets/who-are-we/culture-bg.jpg'
  };

  generalText = {
    content: 'At Damico Energy, we believe that greatness is built, not just envisioned. With a strong foundation in quality, sustainability, and innovation, we empower individuals and businesses to shape a better tomorrow. Our commitment to excellence drives everything we do, from our cutting-edge technology to our unwavering dedication to customer satisfaction.'
  };

  contentBlocks = [
    {
      title: 'Empowering Women',
      description: 'We are committed to fostering gender equality and empowering women in the energy sector. Our inclusive workplace provides equal opportunities for growth, leadership, and innovation.',
      background: '#fce4ec',
      titleColor: '#c2185b',
      image: 'assets/who-are-we/empowering-women.jpg',
      imageFirst: false
    },
    {
      title: 'Emiritization',
      description: 'We actively support the UAE\'s vision for Emiritization by providing opportunities for local talent to thrive in the energy sector. Our commitment to national development drives our hiring and training programs.',
      background: '#e3f2fd',
      titleColor: '#1565c0',
      image: 'assets/who-are-we/emiritization.jpg',
      imageFirst: true
    },
    {
      title: 'Unity in Diversity',
      description: 'Our diverse team brings together people from different backgrounds, cultures, and experiences. This diversity fuels innovation and creates a dynamic workplace where every voice is valued.',
      background: '#e8f5e8',
      titleColor: '#2e7d32',
      image: 'assets/who-are-we/unity-diversity.jpg',
      imageFirst: false
    },
    {
      title: 'A Healthy Work Environment',
      description: 'We prioritize the well-being of our employees by creating a supportive and healthy work environment. From flexible work arrangements to wellness programs, we ensure our team thrives.',
      background: '#fce4ec',
      titleColor: '#c2185b',
      image: 'assets/who-are-we/healthy-work.jpg',
      imageFirst: true
    }
  ];

  cta1 = {
    title: 'Want to be a part of the',
    subtitle: 'family',
    description: 'Submit your resume and join our team today.',
    button: 'Apply Now'
  };

  cta2 = {
    title: 'Want to know more about our sales and offers?',
    description: 'Join our newsletter today!',
    placeholder: 'Your Email Address',
    button: 'Subscribe',
    email: ''
  };
}
