import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * ==========================================
 * HeaderBar
 * Component ID: DMC-CMP-4001
 *
 * Top header bar with social icons (left), center links, and right-aligned Arabic text.
 * ==========================================
 *
 * @description
 * Provides the top header bar for the DAMICO site, including social icons, center links, and right-aligned Arabic text. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-headerbar></dmc-headerbar>
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
  selector: 'dmc-headerbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent {
  socialIcons = [
    { icon: 'blog', url: '#' },
    { icon: 'youtube', url: '#' },
    { icon: 'linkedin', url: '#' }
  ];

  topBarLinks = [
    { label: 'Knowledge Base', url: '#' },
    { label: 'Global', url: '#' },
    { label: 'News & Media', url: '#' }
  ];

  arabicText = 'داميكو';
}
