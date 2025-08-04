import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Our Team Component
 * Component ID: DMC-CMP-5010
 *
 * Our Team page accessible from About component's "Meet Our Team" button.
 * ==========================================
 *
 * @description
 * Provides the Our Team page for the DAMICO site, accessible from the About component. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-our-team></dmc-our-team>
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
  selector: 'dmc-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  hero = {
    title: 'Meet Our Team',
    subtitle: 'The People Behind Damico Energy',
    description: 'Our success is built on the foundation of exceptional people. From our leadership team to our field engineers, every member of the Damico family brings unique expertise, passion, and dedication to our mission of sustainable energy innovation.',
    background: 'assets/our-team/hero-bg.jpg'
  };

  leadership = {
    title: 'Leadership Team',
    subtitle: 'Guiding Our Vision Forward',
    members: [
      {
        name: 'Ahmed Al Mansouri',
        position: 'Chief Executive Officer',
        image: 'assets/our-team/ceo.jpg',
        description: 'Leading Damico Energy with over 15 years of experience in the energy sector.',
        linkedin: '#',
        email: 'ahmed.almansouri@damico.ae'
      },
      {
        name: 'Sarah Johnson',
        position: 'Chief Operations Officer',
        image: 'assets/our-team/coo.jpg',
        description: 'Overseeing all operational aspects with expertise in maritime logistics.',
        linkedin: '#',
        email: 'sarah.johnson@damico.ae'
      },
      {
        name: 'Mohammed Al Rashid',
        position: 'Chief Technology Officer',
        image: 'assets/our-team/cto.jpg',
        description: 'Driving innovation and digital transformation across all operations.',
        linkedin: '#',
        email: 'mohammed.alrashid@damico.ae'
      }
    ]
  };

  departments = {
    title: 'Our Departments',
    subtitle: 'Specialized Teams Working Together',
    teams: [
      {
        name: 'Operations',
        icon: '⚡',
        description: 'Our operations team ensures seamless execution of all maritime and energy services.',
        members: 45,
        color: '#2196F3'
      },
      {
        name: 'Engineering',
        icon: '🔧',
        description: 'Innovative engineers developing sustainable energy solutions and technologies.',
        members: 32,
        color: '#4CAF50'
      },
      {
        name: 'Sales & Marketing',
        icon: '📈',
        description: 'Building strong relationships and expanding our global market presence.',
        members: 28,
        color: '#FF9800'
      },
      {
        name: 'Finance & Legal',
        icon: '⚖️',
        description: 'Ensuring compliance and financial excellence in all our operations.',
        members: 18,
        color: '#9C27B0'
      },
      {
        name: 'Human Resources',
        icon: '👥',
        description: 'Fostering a positive workplace culture and supporting our team growth.',
        members: 12,
        color: '#E91E63'
      },
      {
        name: 'Research & Development',
        icon: '🔬',
        description: 'Pioneering new technologies and sustainable energy solutions.',
        members: 25,
        color: '#607D8B'
      }
    ]
  };

  culture = {
    title: 'Our Culture',
    subtitle: 'Values That Drive Us Forward',
    values: [
      {
        title: 'Innovation',
        description: 'Constantly pushing boundaries to create sustainable energy solutions.',
        icon: '💡'
      },
      {
        title: 'Excellence',
        description: 'Maintaining the highest standards in everything we do.',
        icon: '⭐'
      },
      {
        title: 'Collaboration',
        description: 'Working together to achieve greater results than any individual.',
        icon: '🤝'
      },
      {
        title: 'Sustainability',
        description: 'Committed to environmental responsibility and green energy.',
        icon: '🌱'
      }
    ]
  };

  stats = {
    title: 'Team Statistics',
    subtitle: 'Our Growing Family',
    numbers: [
      { value: '160+', label: 'Team Members' },
      { value: '25+', label: 'Nationalities' },
      { value: '15+', label: 'Years Experience' },
      { value: '95%', label: 'Employee Satisfaction' }
    ]
  };

  cta = {
    title: 'Join Our Team',
    subtitle: 'Be Part of Something Bigger',
    description: 'We\'re always looking for talented individuals who share our passion for innovation and sustainability. Explore our current openings and become part of the Damico family.',
    button: 'View Open Positions',
    background: 'assets/our-team/cta-bg.jpg'
  };
}
