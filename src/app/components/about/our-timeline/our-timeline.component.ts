import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Our Timeline Component
 * Component ID: DMC-CMP-5009
 *
 * Our Timeline page accessible from About component's "Explore Timeline" button.
 * ==========================================
 *
 * @description
 * Provides the Our Timeline page for the DAMICO site, accessible from the About component. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-our-timeline></dmc-our-timeline>
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
  selector: 'dmc-our-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-timeline.component.html',
  styleUrls: ['./our-timeline.component.css']
})
export class OurTimelineComponent {
  heritage = {
    title: 'OUR HERITAGE AT',
    subtitle: 'DAMICO ENERGY',
    description: 'Tracing the milestones of our journey towards energy excellence',
    button: 'Explore Our Legacy',
    background: 'assets/our-timeline/heritage-bg.jpg'
  };

  centralImage = {
    image: 'assets/our-timeline/burj-khalifa.jpg',
    alt: 'Burj Khalifa Dubai'
  };

  footer = {
    title: 'DAMICO AND TEAM',
    subtitle: 'STEPPING IN TO',
    subsubtitle: 'HISTORY',
    description: 'Charting the course for a sustainable future',
    button: 'Join The Future',
    background: 'assets/our-timeline/footer-bg.jpg'
  };

  topTimelineCards = [
    {
      image: 'assets/our-timeline/foundation.jpg',
      title: 'FOUNDATION',
      year: '1984',
      description: 'The Beginning of Damico Energy'
    },
    {
      image: 'assets/our-timeline/formation.jpg',
      title: 'FORMATION',
      year: '2010',
      description: 'Pioneering Offshore Exploration'
    },
    {
      image: 'assets/our-timeline/innovation.jpg',
      title: 'INNOVATION',
      year: '202X',
      description: 'Leading Sustainable Energy Solutions'
    }
  ];

  bottomTimelineCards = [
    {
      image: 'assets/our-timeline/expansion.jpg',
      title: 'EXPANSION',
      year: '2012',
      description: 'Strategic Vessel Purchase for Enhanced Logistics'
    },
    {
      image: 'assets/our-timeline/global-reach.jpg',
      title: 'GLOBAL REACH',
      year: '2016',
      description: 'Establishing Base Office in India'
    },
    {
      image: 'assets/our-timeline/pioneering-effort.jpg',
      title: 'PIONEERING EFFORT',
      year: '2018',
      description: 'Becoming a Pioneer in the Supply of Bunkers in the MENA Region'
    }
  ];
}
