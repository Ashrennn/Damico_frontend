import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Our History Component
 * Component ID: DMC-CMP-5008
 *
 * Our History page accessible from About component's "Read More" button.
 * ==========================================
 *
 * @description
 * Provides the Our History page for the DAMICO site, accessible from the About component. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-our-history></dmc-our-history>
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
  selector: 'dmc-our-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-history.component.html',
  styleUrls: ['./our-history.component.css']
})
export class OurHistoryComponent {
  hero = {
    title: 'Our History',
    subtitle: 'A Journey of Innovation and Growth',
    description: 'From humble beginnings to becoming a leading force in sustainable energy solutions, Damico Energy has built a legacy of excellence, innovation, and commitment to environmental responsibility. Our story is one of vision, perseverance, and unwavering dedication to a sustainable future.',
    background: 'assets/our-history/hero-bg.jpg'
  };

  timeline = {
    title: 'Our Timeline',
    subtitle: 'Key Milestones in Our Journey',
    events: [
      {
        year: '2009',
        title: 'Foundation',
        description: 'Damico Energy was founded with a vision to revolutionize the maritime energy sector through sustainable solutions.',
        image: 'assets/our-history/2009.jpg',
        achievements: ['Company established', 'First office in Dubai', 'Initial team of 15 members']
      },
      {
        year: '2012',
        title: 'First Major Contract',
        description: 'Secured our first major maritime bunkering contract, marking the beginning of our operational excellence.',
        image: 'assets/our-history/2012.jpg',
        achievements: ['First bunkering contract', 'Fleet expansion', 'Team growth to 50 members']
      },
      {
        year: '2015',
        title: 'Regional Expansion',
        description: 'Expanded operations across the GCC region, establishing offices in multiple countries.',
        image: 'assets/our-history/2015.jpg',
        achievements: ['GCC expansion', 'New regional offices', '100+ team members']
      },
      {
        year: '2018',
        title: 'Technology Innovation',
        description: 'Launched our digital platform and introduced cutting-edge technology solutions for maritime operations.',
        image: 'assets/our-history/2018.jpg',
        achievements: ['Digital platform launch', 'IoT integration', 'Smart fleet management']
      },
      {
        year: '2021',
        title: 'Global Recognition',
        description: 'Received international awards for sustainability and innovation in maritime energy services.',
        image: 'assets/our-history/2021.jpg',
        achievements: ['International awards', 'Sustainability recognition', 'Global partnerships']
      },
      {
        year: '2024',
        title: 'Future Forward',
        description: 'Leading the industry with advanced AI solutions and comprehensive sustainable energy services.',
        image: 'assets/our-history/2024.jpg',
        achievements: ['AI integration', 'Green energy focus', '200+ team members']
      }
    ]
  };

  achievements = {
    title: 'Major Achievements',
    subtitle: 'Milestones That Define Our Success',
    highlights: [
      {
        icon: '🏆',
        title: 'Industry Awards',
        count: '15+',
        description: 'International recognition for excellence in maritime services'
      },
      {
        icon: '🌍',
        title: 'Global Presence',
        count: '25+',
        description: 'Countries where we operate and serve clients'
      },
      {
        icon: '🚢',
        title: 'Vessels Served',
        count: '10,000+',
        description: 'Maritime vessels successfully serviced worldwide'
      },
      {
        icon: '💚',
        title: 'Green Initiatives',
        count: '50+',
        description: 'Sustainable energy projects implemented'
      }
    ]
  };

  evolution = {
    title: 'Company Evolution',
    subtitle: 'How We\'ve Grown and Adapted',
    phases: [
      {
        period: '2009-2014',
        title: 'Foundation Phase',
        description: 'Building the foundation with focus on establishing reliable maritime services and building trust with clients.',
        focus: ['Service reliability', 'Client relationships', 'Operational excellence']
      },
      {
        period: '2015-2019',
        title: 'Expansion Phase',
        description: 'Rapid growth and regional expansion, establishing presence across the GCC and expanding service portfolio.',
        focus: ['Geographic expansion', 'Service diversification', 'Team growth']
      },
      {
        period: '2020-2023',
        title: 'Innovation Phase',
        description: 'Embracing technology and digital transformation while maintaining focus on sustainability and environmental responsibility.',
        focus: ['Digital transformation', 'Sustainability focus', 'Technology integration']
      },
      {
        period: '2024-Present',
        title: 'Future Phase',
        description: 'Leading the industry with AI-powered solutions and comprehensive sustainable energy services for the modern maritime world.',
        focus: ['AI integration', 'Green energy leadership', 'Global innovation']
      }
    ]
  };

  values = {
    title: 'Enduring Values',
    subtitle: 'Principles That Have Guided Us Throughout',
    principles: [
      {
        title: 'Innovation',
        description: 'Constantly pushing boundaries to create better, more efficient solutions.',
        icon: '💡'
      },
      {
        title: 'Sustainability',
        description: 'Committed to environmental responsibility and green energy solutions.',
        icon: '🌱'
      },
      {
        title: 'Excellence',
        description: 'Maintaining the highest standards in every aspect of our operations.',
        icon: '⭐'
      },
      {
        title: 'Integrity',
        description: 'Building trust through honest, transparent business practices.',
        icon: '🤝'
      }
    ]
  };

  cta = {
    title: 'Be Part of Our Future',
    subtitle: 'Join Us in Shaping Tomorrow',
    description: 'As we continue to grow and innovate, we invite you to be part of our journey. Whether as a client, partner, or team member, together we can build a sustainable future for the maritime industry.',
    button: 'Get in Touch',
    background: 'assets/our-history/cta-bg.jpg'
  };
}
