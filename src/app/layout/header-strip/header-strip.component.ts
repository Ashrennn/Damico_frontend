import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-strip.component.html',
  styleUrl: './header-strip.component.scss'
})
export class HeaderStripComponent {
  @Output() headerBarToggle = new EventEmitter<boolean>();

  contactInfo = {
    phone: '+971 4 123 4567',
    email: 'info@damico.com',
    address: 'Dubai, UAE'
  };

  socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'linkedin', url: '#' },
    { icon: 'instagram', url: '#' }
  ];

  // Mobile icon links data
  mobileLinks = [
    {
      title: 'Knowledge Base',
      url: '#',
      icon: 'check-circle'
    },
    {
      title: 'Global',
      url: '#',
      icon: 'globe'
    },
    {
      title: 'News & Media',
      url: '#',
      icon: 'newspaper'
    }
  ];

  // Social dropdown state
  isSocialDropdownOpen = false;

  /**
   * Handle mobile icon link click
   * @param link - The link object containing title and URL
   */
  onMobileLinkClick(link: any): void {
    console.log(`Navigating to ${link.title}: ${link.url}`);
    // Add your navigation logic here
  }

  /**
   * Toggle social dropdown menu and control header bar visibility
   */
  toggleSocialDropdown(): void {
    this.isSocialDropdownOpen = !this.isSocialDropdownOpen;
    
    // Hide header bar when dropdown opens, show when it closes
    this.headerBarToggle.emit(this.isSocialDropdownOpen);
  }

  /**
   * Close social dropdown when clicking outside
   */
  closeSocialDropdown(): void {
    if (this.isSocialDropdownOpen) {
      this.isSocialDropdownOpen = false;
      // Show header bar when dropdown closes
      this.headerBarToggle.emit(false);
    }
  }

  /**
   * Handle clicks outside the dropdown
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.social-dropdown')) {
      this.closeSocialDropdown();
    }
  }
} 
