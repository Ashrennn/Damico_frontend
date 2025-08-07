import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Operations Component
 * Component ID: DMC-CMP-5002
 *
 * Operations page with vessel search, stats, features, vessel cards, and footer.
 * ==========================================
 *
 * @description
 * Provides the Operations page for the DAMICO site, including vessel search, stats, features, vessel cards, help section, and footer. Follows DAMICO standards for structure, naming, and documentation.
 *
 * @usage
 * ```html
 * <dmc-operations></dmc-operations>
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
  selector: 'dmc-operations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  
  // Search functionality
  activeTab = 'Charter';
  searchData = {
    location: '',
    vesselType: '',
    capacity: ''
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onSearch() {
    console.log('Search:', this.searchData);
  }
}
