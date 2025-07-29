import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { HeaderStripComponent } from './common/header_strip/header_strip.component';
import { HeaderBarComponent } from './common/header-bar/header-bar.component';
import { DmcDeviceDetectorService, DeviceType } from '../core/device/services/device-detector.service';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { DynamicHeaderComponent } from "./common/dynamic-header/dynamic-header.component";

/**
 * ==========================================
 * SITE COMPONENT
 * File ID: [DMC-CMP-0200]
 * 
 * Main site component for corporate website
 * ==========================================
 * 
 * @component SiteComponent
 * @description
 * This standalone component serves as the main container
 * for all site content. It handles the overall layout
 * and structure of the corporate website.
 * 
 * @deviceTypes
 * - mobile-small  (320px - 480px)
 * - mobile-large  (481px - 600px)
 * - tablet-small  (601px - 768px)
 * - tablet-large  (769px - 1024px)
 * - laptop-small  (1025px - 1280px)
 * - laptop-large  (1281px - 1440px)
 * - desktop-small (1441px - 1920px)
 * - desktop-large (1921px and above)
 * 
 * @features
 * - Responsive layout structure
 * - Device-specific optimizations
 * - Breadcrumb data management
 * - Content section organization
 * 
 * @lastModified 2024-03-19 17:55 UTC
 */
@Component({
  selector: 'dmc-site',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbComponent,
    HeaderStripComponent,
    DynamicHeaderComponent
],
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit, OnDestroy {
  /**
   * Breadcrumb data for navigation
   */
  breadcrumbData: { label: string; url: string }[] = [];

  /**
   * Current device type class for template binding
   */
  currentDeviceTypeClass: string = 'laptop-small';

  /**
   * Host binding for device-specific CSS classes
   */
  @HostBinding('class') deviceClass = 'dmc-site--laptop-small';

  /**
   * Subject for cleanup subscriptions
   */
  private readonly destroy$ = new Subject<void>();

  /**
   * Previous device type to prevent unnecessary updates
   */
  private previousDeviceType: DeviceType = DeviceType.LaptopSmall;

  constructor(private deviceDetector: DmcDeviceDetectorService) {}

  /**
   * Initialize component and set up device detection
   */
  ngOnInit(): void {
    // Initialize breadcrumb data
    this.setupBreadcrumbData();

    // Subscribe to device type changes with automatic cleanup
    this.deviceDetector.deviceType$
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged()
      )
      .subscribe(deviceType => {
        if (deviceType !== this.previousDeviceType) {
          this.previousDeviceType = deviceType;
          this.updateDeviceClass(deviceType);
          this.currentDeviceTypeClass = deviceType.toLowerCase();
          this.updateLayoutForDeviceType(deviceType);
        }
      });
  }

  /**
   * Cleanup subscriptions on destroy
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Update device class based on current device type
   */
  private updateDeviceClass(deviceType: DeviceType): void {
    this.deviceClass = `dmc-site--${deviceType.toLowerCase()}`;
  }

  /**
   * Setup initial breadcrumb data
   */
  private setupBreadcrumbData(): void {
    this.breadcrumbData = [
      { label: 'Home', url: '/' },
      { label: 'Current Page', url: '/current' }
    ];
  }

  /**
   * @method updateBreadcrumb
   * @description Updates the breadcrumb navigation data based on the current route
   * 
   * @param {Array} data - New breadcrumb items to add to the navigation path
   */
  updateBreadcrumb(data: { label: string; url: string }[]): void {
    this.breadcrumbData = [
      { label: 'Home', url: '/' },
      ...data
    ];
  }

  /**
   * @method updateLayoutForDeviceType
   * @description Updates the layout CSS variables based on the current device type.
   * Sets appropriate dimensions and spacing for header elements to ensure
   * proper responsive behavior across different screen sizes.
   * 
   * For mobile layouts: Sets margin-top equal to header strip height
   * For larger screens: Gradually increases margin-top for better spacing
   * 
   * @param {DeviceType} deviceType - The current device type from the device detector service
   * @private
   */
  private updateLayoutForDeviceType(deviceType: DeviceType): void {
    // Skip in SSR environment where document is not available
    if (typeof document === 'undefined') {
      return;
    }
    
    // Update CSS custom properties based on device type
    const root = document.documentElement;
    
    switch (deviceType) {
      case DeviceType.MobileSmall:
      case DeviceType.MobileLarge:
        root.style.setProperty('--dmc-site-header-strip-height', '2.75rem');
        root.style.setProperty('--dmc-site-header-bar-height', '50px');
        root.style.setProperty('--dmc-site-header-menu-height', '40px');
        // For mobile layouts, set margin exactly equal to header strip height
        root.style.setProperty('--dmc-site-header-margin', 'var(--dmc-site-header-strip-height)');
        break;
        
      case DeviceType.TabletSmall:
        root.style.setProperty('--dmc-site-header-strip-height', '3rem');
        root.style.setProperty('--dmc-site-header-bar-height', '60px');
        root.style.setProperty('--dmc-site-header-menu-height', '45px');
        // Gradual increase starts from tablet small with 1.5rem
        root.style.setProperty('--dmc-site-header-margin', 'calc(var(--dmc-site-header-strip-height) + 1.5rem)');
        break;
        
      case DeviceType.TabletLarge:
        root.style.setProperty('--dmc-site-header-strip-height', '3.25rem');
        root.style.setProperty('--dmc-site-header-bar-height', '65px');
        root.style.setProperty('--dmc-site-header-menu-height', '50px');
        root.style.setProperty('--dmc-site-header-margin', 'calc(var(--dmc-site-header-strip-height) + 2rem)');
        break;
        
      case DeviceType.LaptopSmall:
        root.style.setProperty('--dmc-site-header-strip-height', '3.5rem');
        root.style.setProperty('--dmc-site-header-bar-height', '70px');
        root.style.setProperty('--dmc-site-header-menu-height', '55px');
        root.style.setProperty('--dmc-site-header-margin', 'calc(var(--dmc-site-header-strip-height) + 2.5rem)');
        break;
        
      case DeviceType.LaptopLarge:
        root.style.setProperty('--dmc-site-header-strip-height', '3.75rem');
        root.style.setProperty('--dmc-site-header-bar-height', '75px');
        root.style.setProperty('--dmc-site-header-menu-height', '60px');
        root.style.setProperty('--dmc-site-header-margin', 'calc(var(--dmc-site-header-strip-height) + 3rem)');
        break;
        
      case DeviceType.DesktopSmall:
        root.style.setProperty('--dmc-site-header-strip-height', '4rem');
        root.style.setProperty('--dmc-site-header-bar-height', '80px');
        root.style.setProperty('--dmc-site-header-menu-height', '65px');
        root.style.setProperty('--dmc-site-header-margin', 'calc(var(--dmc-site-header-strip-height) + 3.5rem)');
        break;
        
      case DeviceType.DesktopLarge:
        root.style.setProperty('--dmc-site-header-strip-height', '4.25rem');
        root.style.setProperty('--dmc-site-header-bar-height', '85px');
        root.style.setProperty('--dmc-site-header-menu-height', '70px');
        root.style.setProperty('--dmc-site-header-margin', 'calc(var(--dmc-site-header-strip-height) + 4rem)');
        break;
    }
  }
} 