import { Injectable, NgZone, PLATFORM_ID, Inject, OnDestroy, isDevMode } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject, Observable, fromEvent, merge, animationFrameScheduler, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, shareReplay, tap, throttleTime } from 'rxjs/operators';

import { DeviceInfo } from '../interfaces/device-info.interface';
import * as DeviceHelpers from '../utils/device-helpers';

/**
 * ==========================================
 * DEVICE DETECTOR SERVICE
 * File ID: [DMC-SVC-0001]
 * 
 * Enhanced device detection service that provides
 * granular device type detection and responsive features
 * ==========================================
 * 
 * @description
 * This service extends the basic device detection capabilities
 * with enhanced features including:
 * - Granular device type detection (8 device types)
 * - Screen size monitoring with throttling
 * - Orientation detection
 * - Detailed device information
 * - Network status monitoring
 * - Fallback detection mechanism
 * 
 * @usage
 * ```typescript
 * constructor(private deviceDetector: DmcDeviceDetectorService) {
 *   // Get device type updates
 *   this.deviceDetector.deviceType$.subscribe(type => {
 *     console.log('Device Type:', type);
 *   });
 *   
 *   // Get full device information
 *   this.deviceDetector.getDeviceInfo().subscribe(info => {
 *     console.log('Device Info:', info);
 *   });
 * }
 * ```
 * 
 * @features
 * - Real-time device type detection with 8 granular types
 * - Automatic fallback to window measurements
 * - Screen size and orientation monitoring
 * - Detailed device information (brand, model, capabilities)
 * - Network status monitoring
 * - Optional location detection
 * 
 * @deviceTypes
 * - MobileSmall  (≤320px)   - Extra small smartphones
 * - MobileLarge  (≤480px)   - Large smartphones
 * - TabletSmall  (≤768px)   - Small tablets
 * - TabletLarge  (≤992px)   - Large tablets
 * - LaptopSmall  (≤1200px)  - Small laptops
 * - LaptopLarge  (≤1440px)  - Large laptops
 * - DesktopSmall (≤1920px)  - Standard desktops
 * - DesktopLarge (>1920px)  - 4K displays
 * 
 * @lastModified 2024-03-19 17:45 UTC
 */

/**
 * ==========================================
 * DEVICE TYPE ENUM
 * Component ID: [DMC-SVC-0001]
 * 
 * Defines the granular device type categories
 * for responsive design implementation
 * ==========================================
 * 
 * @description
 * Enum defining all possible device types for
 * granular responsive design implementation.
 * Each type corresponds to a specific screen
 * width range and device category.
 * 
 * @usage
 * ```typescript
 * import { DeviceType } from './device-detector.service';
 * 
 * // Use in component
 * @Component({
 *   template: `<div [class]="'dmc-component--' + deviceType">...</div>`
 * })
 * export class MyComponent {
 *   deviceType: DeviceType;
 * }
 * ```
 */
export enum DeviceType {
    MobileSmall = 'mobile-small',     // Extra small smartphones
    MobileLarge = 'mobile-large',     // Large smartphones
    TabletSmall = 'tablet-small',     // Small tablets
    TabletLarge = 'tablet-large',     // Large tablets
    LaptopSmall = 'laptop-small',     // Small laptops
    LaptopLarge = 'laptop-large',     // Large laptops
    DesktopSmall = 'desktop-small',   // Small desktops
    DesktopLarge = 'desktop-large'    // Large desktops/4K displays
}

@Injectable({
  providedIn: 'root'
})
export class DmcDeviceDetectorService implements OnDestroy {
  private readonly subscriptions = new Subscription();
  private readonly isDevMode = isDevMode();

  // Breakpoints configuration in ascending order
  private readonly BREAKPOINTS = {
    MOBILE_SMALL_MAX: '320px',     // Small smartphones (iPhone SE, etc.)
    MOBILE_LARGE_MAX: '480px',     // Large smartphones
    TABLET_SMALL_MAX: '768px',     // Small tablets (iPad Mini, etc.)
    TABLET_LARGE_MAX: '992px',     // Large tablets (iPad Pro, etc.)
    LAPTOP_SMALL_MAX: '1200px',    // Small laptops
    LAPTOP_LARGE_MAX: '1440px',    // Large laptops
    DESKTOP_SMALL_MAX: '1920px',   // Standard desktop displays
    DESKTOP_LARGE_MAX: '2560px'    // 4K and larger displays
  };

  private deviceInfo: DeviceInfo = {
    deviceType: 'desktop',
    browser: '',
    browserVersion: '',
    os: '',
    osVersion: '',
    deviceModel: '',
    manufacturer: '',
    userAgent: '',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    browser_engine: ''
  };
  
  private deviceInfoSubject = new BehaviorSubject<DeviceInfo | null>(null);
  private deviceTypeSubject = new BehaviorSubject<DeviceType>(DeviceType.DesktopLarge);
  
  // Observable for device orientation changes
  private orientation$ = new BehaviorSubject<'portrait' | 'landscape'>('landscape');
  
  // Observable for screen size changes
  private screenSize$ = new BehaviorSubject(DeviceHelpers.getDeviceDimensions());
  
  // Observable for online status
  private online$ = new BehaviorSubject<boolean>(true);

  // Public observables
  public deviceType$ = this.deviceTypeSubject.asObservable();
  public deviceInfo$ = this.deviceInfoSubject.asObservable();

  constructor(
    private deviceDetector: DeviceDetectorService,
    private breakpointObserver: BreakpointObserver,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initializeDeviceInfo();
    if (isPlatformBrowser(this.platformId)) {
      this.setupDeviceDetection();
      this.setupEventListeners();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private log(message: string, data?: any) {
    if (this.isDevMode) {
      console.log(message, data || '');
    }
  }

  /**
   * Initialize basic device information
   */
  private initializeDeviceInfo(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userAgent = this.deviceDetector.userAgent;
      const os = this.deviceDetector.os;
      
      this.deviceInfo = {
        deviceType: this.determineDeviceType(),
        browser: this.deviceDetector.browser,
        browserVersion: this.deviceDetector.browser_version,
        os: os.replace(/windows-/i, ''),
        osVersion: this.deviceDetector.os_version,
        deviceModel: this.determineDeviceModel(),
        manufacturer: this.determineManufacturer(),
        userAgent: userAgent,
        isMobile: this.deviceDetector.isMobile(),
        isTablet: this.deviceDetector.isTablet(),
        isDesktop: this.deviceDetector.isDesktop(),
        browser_engine: this.deviceDetector.browser_version
      };
    }

    this.updateDeviceInfo();
  }

  private determineDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (!isPlatformBrowser(this.platformId)) return 'desktop';

    const width = window.innerWidth;
    const userAgent = navigator.userAgent.toLowerCase();
    const hasTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

    // Check for mobile-specific indicators
    if (
      /mobile|iphone|ipod|android|blackberry|opera mini|iemobile|wpdesktop/i.test(userAgent) ||
      width <= parseInt(this.BREAKPOINTS.MOBILE_LARGE_MAX)
    ) {
      return 'mobile';
    }

    // Check for tablet-specific indicators
    if (
      /ipad|tablet|playbook|silk/i.test(userAgent) ||
      (width <= parseInt(this.BREAKPOINTS.TABLET_LARGE_MAX) && hasTouch)
    ) {
      return 'tablet';
    }

    return 'desktop';
  }

  private determineDeviceModel(): string {
    if (!isPlatformBrowser(this.platformId)) return 'Unknown';

    const ua = navigator.userAgent;
    const uaLower = ua.toLowerCase();

    // Extract detailed device information from user agent
    const deviceInfo = {
      brand: '',
      model: '',
      fullName: ''
    };

    // Samsung Pattern Matching
    const samsungPattern = /SM-([A-Z]\d{3,4}[A-Z]?)/i;
    const samsungMatch = ua.match(samsungPattern);
    if (samsungMatch) {
      const model = samsungMatch[1];
      // Map Samsung model numbers to marketing names
      const samsungModels: { [key: string]: string } = {
        'G998': 'Galaxy S21 Ultra',
        'G996': 'Galaxy S21+',
        'G991': 'Galaxy S21',
        'G781': 'Galaxy S20 FE 5G',
        'N986': 'Galaxy Note 20 Ultra',
        'N981': 'Galaxy Note 20',
        'A536': 'Galaxy A53 5G',
        'A526': 'Galaxy A52 5G',
        'M236': 'Galaxy M23',
        'F127': 'Galaxy F12',
        'T736': 'Galaxy Tab S7 FE',
        // Add more Samsung models as needed
      };

      // Extract the base model number (first 4 characters)
      const baseModel = model.substring(0, 4);
      deviceInfo.brand = 'Samsung';
      deviceInfo.model = samsungModels[baseModel] || `Galaxy ${model}`;
      deviceInfo.fullName = `Samsung ${deviceInfo.model}`;
      return deviceInfo.fullName;
    }

    // iPhone Pattern Matching
    const iphonePattern = /iPhone(?:\s+(\d{1,2}(?:\s*(?:Plus|Pro|Pro\s+Max|mini))?))?\s*;/i;
    const iphoneMatch = ua.match(iphonePattern);
    if (iphoneMatch || uaLower.includes('iphone')) {
      deviceInfo.brand = 'Apple';
      if (iphoneMatch && iphoneMatch[1]) {
        deviceInfo.model = `iPhone ${iphoneMatch[1]}`;
      } else {
        // Try to determine iPhone model from OS version
        const osVersionMatch = ua.match(/OS\s+(\d+)_/i);
        if (osVersionMatch) {
          const osVersion = parseInt(osVersionMatch[1]);
          // Map OS version to likely iPhone model
          const osToModel: { [key: number]: string } = {
            16: 'iPhone 14 Series',
            15: 'iPhone 13 Series',
            14: 'iPhone 12 Series',
            13: 'iPhone 11 Series',
            // Add more mappings as needed
          };
          deviceInfo.model = osToModel[osVersion] || 'iPhone';
        } else {
          deviceInfo.model = 'iPhone';
        }
      }
      deviceInfo.fullName = deviceInfo.model;
      return deviceInfo.fullName;
    }

    // Google Pixel Pattern Matching
    const pixelPattern = /Pixel\s*(\d+(?:\s*(?:XL|Pro|Pro\s+Max|a))?)/i;
    const pixelMatch = ua.match(pixelPattern);
    if (pixelMatch) {
      deviceInfo.brand = 'Google';
      deviceInfo.model = `Pixel ${pixelMatch[1]}`;
      deviceInfo.fullName = deviceInfo.model;
      return deviceInfo.fullName;
    }

    // OnePlus Pattern Matching
    const oneplusPattern = /OnePlus\s*((?:\d+\s*(?:T|R|Pro)?)|(?:Nord\s*[A-Z]?\d*))/i;
    const oneplusMatch = ua.match(oneplusPattern);
    if (oneplusMatch) {
      deviceInfo.brand = 'OnePlus';
      deviceInfo.model = oneplusMatch[1];
      deviceInfo.fullName = `OnePlus ${deviceInfo.model}`;
      return deviceInfo.fullName;
    }

    // Xiaomi/Redmi/POCO Pattern Matching
    if (uaLower.includes('xiaomi') || uaLower.includes('redmi') || uaLower.includes('poco')) {
      const xiaomiPattern = /(xiaomi|redmi|poco)\s*((?:[a-z]+)?(?:\s*\d+\s*(?:pro|lite|plus|ultra)?))/i;
      const xiaomiMatch = ua.match(xiaomiPattern);
      if (xiaomiMatch) {
        deviceInfo.brand = xiaomiMatch[1].charAt(0).toUpperCase() + xiaomiMatch[1].slice(1);
        deviceInfo.model = xiaomiMatch[2];
        deviceInfo.fullName = `${deviceInfo.brand} ${deviceInfo.model}`;
        return deviceInfo.fullName;
      }
    }

    // Huawei Pattern Matching
    const huaweiPattern = /HUAWEI\s*([A-Za-z]+(?:-|\s+)[A-Za-z0-9]+)/i;
    const huaweiMatch = ua.match(huaweiPattern);
    if (huaweiMatch) {
      deviceInfo.brand = 'Huawei';
      deviceInfo.model = huaweiMatch[1];
      deviceInfo.fullName = `Huawei ${deviceInfo.model}`;
      return deviceInfo.fullName;
    }

    // OPPO Pattern Matching
    const oppoPattern = /OPPO\s*([A-Za-z0-9]+(?:\s*[A-Za-z0-9]+)*)/i;
    const oppoMatch = ua.match(oppoPattern);
    if (oppoMatch) {
      deviceInfo.brand = 'OPPO';
      deviceInfo.model = oppoMatch[1];
      deviceInfo.fullName = `OPPO ${deviceInfo.model}`;
      return deviceInfo.fullName;
    }

    // Vivo Pattern Matching
    const vivoPattern = /vivo\s*([A-Za-z0-9]+(?:\s*[A-Za-z0-9]+)*)/i;
    const vivoMatch = ua.match(vivoPattern);
    if (vivoMatch) {
      deviceInfo.brand = 'Vivo';
      deviceInfo.model = vivoMatch[1];
      deviceInfo.fullName = `Vivo ${deviceInfo.model}`;
      return deviceInfo.fullName;
    }

    // Realme Pattern Matching
    const realmePattern = /realme\s*([A-Za-z0-9]+(?:\s*[A-Za-z0-9]+)*)/i;
    const realmeMatch = ua.match(realmePattern);
    if (realmeMatch) {
      deviceInfo.brand = 'Realme';
      deviceInfo.model = realmeMatch[1];
      deviceInfo.fullName = `Realme ${deviceInfo.model}`;
      return deviceInfo.fullName;
    }

    // Generic Android Device Detection
    if (uaLower.includes('android')) {
      const androidPattern = /android\s*[\d\.]+;\s*([^;)]+)/i;
      const androidMatch = ua.match(androidPattern);
      if (androidMatch) {
        const deviceName = androidMatch[1].trim();
        if (deviceName !== 'Linux' && deviceName !== 'Android') {
          return deviceName;
        }
      }
      return 'Android Device';
    }

    // Try to extract any device model information from user agent
    const genericModelPattern = /;\s*([A-Za-z0-9-]+(?:\s+[A-Za-z0-9-]+)*)\s*(?:build|[;)])/i;
    const genericMatch = ua.match(genericModelPattern);
    if (genericMatch && genericMatch[1]) {
      const model = genericMatch[1].trim();
      if (model.toLowerCase() !== 'android' && model !== 'Linux') {
        return model;
      }
    }

    return 'Unknown Device';
  }

  private determineManufacturer(): string {
    if (!isPlatformBrowser(this.platformId)) return '';

    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('iphone') || ua.includes('ipad')) return 'Apple';
    if (ua.includes('samsung')) return 'Samsung';
    if (ua.includes('pixel')) return 'Google';
    if (ua.includes('huawei')) return 'Huawei';
    if (ua.includes('oneplus')) return 'OnePlus';
    if (ua.includes('mi')) return 'Xiaomi';
    return '';
  }

  private calculateOrientation(): 'portrait' | 'landscape' {
    if (!isPlatformBrowser(this.platformId)) return 'landscape';
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Use screen orientation API if available
    if (window.screen.orientation) {
      return window.screen.orientation.type.includes('portrait') ? 'portrait' : 'landscape';
    }
    
    // Fallback to dimension comparison
    return height > width ? 'portrait' : 'landscape';
  }

  private updateDeviceTypeFromScreenSize(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const newDeviceType = this.determineDeviceType();
    if (newDeviceType !== this.deviceInfo.deviceType) {
      this.deviceInfo = {
        ...this.deviceInfo,
        deviceType: newDeviceType,
        isMobile: newDeviceType === 'mobile',
        isTablet: newDeviceType === 'tablet',
        isDesktop: newDeviceType === 'desktop'
      };
      this.updateDeviceInfo();
    }
  }

  /**
   * Set up event listeners for device changes
   */
  private setupEventListeners(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.ngZone.runOutsideAngular(() => {
      // Listen for orientation changes
      const orientationSub = fromEvent(window, 'orientationchange').subscribe(() => {
        this.ngZone.run(() => {
          this.orientation$.next(this.calculateOrientation());
          this.updateDeviceTypeFromScreenSize();
          this.updateDeviceInfo();
        });
      });

      // Listen for resize events with both immediate and debounced updates
      const resize$ = fromEvent(window, 'resize');

      // Immediate updates during resize using throttle with animationFrame
      const resizeThrottleSub = resize$
        .pipe(
          throttleTime(0, animationFrameScheduler),
          tap(() => {
            this.ngZone.run(() => {
              const width = window.innerWidth;
              this.log('📏 Resize detected:', { width });
              
              this.screenSize$.next(DeviceHelpers.getDeviceDimensions());
              
              const deviceType = this.determineDeviceTypeFromWidth(width);
              this.log('🔄 Device type updated on resize:', {
                baseType: deviceType,
                granularType: this.deviceTypeSubject.value,
                screenWidth: width
              });
            });
          })
        )
        .subscribe();

      // Final update after resize ends
      const resizeDebounceSub = resize$
        .pipe(
          debounceTime(100),
          tap(() => {
            this.ngZone.run(() => {
              const width = window.innerWidth;
              this.log('✨ Resize finished:', { 
                finalWidth: width,
                deviceType: this.deviceTypeSubject.value 
              });
              this.screenSize$.next(DeviceHelpers.getDeviceDimensions());
              this.updateDeviceInfo();
            });
          })
        )
        .subscribe();

      // Listen for online/offline events
      const onlineSub = merge(
        fromEvent(window, 'online'),
        fromEvent(window, 'offline')
      ).subscribe(() => {
        this.ngZone.run(() => {
          this.online$.next(navigator.onLine);
          this.updateDeviceInfo();
        });
      });

      // Add all subscriptions to the subscription collection
      this.subscriptions.add(orientationSub);
      this.subscriptions.add(resizeThrottleSub);
      this.subscriptions.add(resizeDebounceSub);
      this.subscriptions.add(onlineSub);
    });
  }

  /**
   * Update device information
   */
  private updateDeviceInfo(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const screenProps = DeviceHelpers.getScreenProperties();
    const dimensions = DeviceHelpers.getDeviceDimensions();
    const capabilities = DeviceHelpers.getDeviceCapabilities();
    const networkInfo = DeviceHelpers.getNetworkInfo();
    const detailedInfo = this.getDetailedDeviceInfo();

    const updatedInfo: DeviceInfo = {
      ...this.deviceInfo,
      ...dimensions,
      ...capabilities,
      ...networkInfo,
      ...screenProps,
      orientation: this.orientation$.value,
      estimatedDeviceAge: DeviceHelpers.estimateDeviceAge(this.deviceInfo.deviceModel, this.deviceInfo.osVersion),
      brand: detailedInfo.brand,
      fullName: detailedInfo.fullName
    };

    this.deviceInfoSubject.next(updatedInfo);
  }

  /**
   * Get current device information
   */
  public getDeviceInfo(): Observable<DeviceInfo> {
    return this.deviceInfoSubject.asObservable().pipe(
      filter((info): info is DeviceInfo => info !== null),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  /**
   * Get current device orientation
   */
  public getOrientation(): Observable<'portrait' | 'landscape'> {
    return this.orientation$.asObservable();
  }

  /**
   * Get screen size updates
   */
  public getScreenSize(): Observable<{
    screenWidth: number;
    screenHeight: number;
    actualWidth: number;
    actualHeight: number;
  }> {
    return this.screenSize$.asObservable();
  }

  /**
   * Get online status
   */
  public getOnlineStatus(): Observable<boolean> {
    return this.online$.asObservable();
  }

  /**
   * Check if device is touch capable
   */
  public isTouchDevice(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return this.deviceInfo.isMobile || this.deviceInfo.isTablet;
  }

  /**
   * Get device type
   */
  public getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    return this.deviceInfo.deviceType;
  }

  /**
   * Request device location
   */
  public async requestLocation(): Promise<GeolocationPosition | null> {
    if (!isPlatformBrowser(this.platformId)) return null;
    
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return position;
      } catch {
        return null;
      }
    }
    return null;
  }

  /**
   * ==========================================
   * DEVICE TYPE DETERMINATION
   * Component ID: [DMC-SVC-0001]
   * 
   * Determines device type based on window width
   * ==========================================
   * 
   * @description
   * Maps window width to specific device types using
   * predefined breakpoints. Used by both primary and
   * fallback detection mechanisms.
   * 
   * @param width - Current window width in pixels
   * @returns DeviceType enum value
   */
  private determineDeviceTypeFromWidth(width: number): 'desktop' | 'mobile' | 'tablet' {
    // Convert pixel values from breakpoints
    const mobileSmallMax = parseInt(this.BREAKPOINTS.MOBILE_SMALL_MAX);
    const mobileLargeMax = parseInt(this.BREAKPOINTS.MOBILE_LARGE_MAX);
    const tabletSmallMax = parseInt(this.BREAKPOINTS.TABLET_SMALL_MAX);
    const tabletLargeMax = parseInt(this.BREAKPOINTS.TABLET_LARGE_MAX);
    const laptopSmallMax = parseInt(this.BREAKPOINTS.LAPTOP_SMALL_MAX);
    const laptopLargeMax = parseInt(this.BREAKPOINTS.LAPTOP_LARGE_MAX);
    const desktopSmallMax = parseInt(this.BREAKPOINTS.DESKTOP_SMALL_MAX);

    let newDeviceType: DeviceType;

    if (width <= mobileLargeMax) {
      newDeviceType = width <= mobileSmallMax ? DeviceType.MobileSmall : DeviceType.MobileLarge;
      this.deviceTypeSubject.next(newDeviceType);
      this.log('📱 Device type changed:', { 
        type: 'mobile', 
        granular: newDeviceType, 
        width 
      });
      return 'mobile';
    }
    if (width <= tabletLargeMax) {
      newDeviceType = width <= tabletSmallMax ? DeviceType.TabletSmall : DeviceType.TabletLarge;
      this.deviceTypeSubject.next(newDeviceType);
      this.log('📱 Device type changed:', { 
        type: 'tablet', 
        granular: newDeviceType, 
        width 
      });
      return 'tablet';
    }
    
    // Desktop devices
    if (width <= laptopSmallMax) {
      newDeviceType = DeviceType.LaptopSmall;
    } else if (width <= laptopLargeMax) {
      newDeviceType = DeviceType.LaptopLarge;
    } else if (width <= desktopSmallMax) {
      newDeviceType = DeviceType.DesktopSmall;
    } else {
      newDeviceType = DeviceType.DesktopLarge;
    }
    
    this.deviceTypeSubject.next(newDeviceType);
    this.log('📱 Device type changed:', { 
      type: 'desktop', 
      granular: newDeviceType, 
      width 
    });
    return 'desktop';
  }

  /**
   * ==========================================
   * DEVICE DETECTION SETUP
   * Component ID: [DMC-SVC-0001]
   * 
   * Primary device detection initialization with
   * automatic fallback mechanism
   * ==========================================
   * 
   * @description
   * Sets up the device detection system using a dual approach:
   * 1. Primary: NGX Device Detector
   * 2. Fallback: Window measurements
   * 
   * @returns void
   */
  private setupDeviceDetection(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.log('🔍 Starting device detection...');
    // First try to use the primary device detector
    try {
      const deviceInfo = this.deviceDetector.getDeviceInfo();
      if (deviceInfo && deviceInfo.device) {
        this.log('✅ NGX Device Detector working - using primary detection', {
          detectedDevice: deviceInfo.device,
          userAgent: deviceInfo.userAgent
        });
        
        // Primary detector worked, use its results
        this.deviceInfo = {
          ...this.deviceInfo,
          deviceType: deviceInfo.device as 'desktop' | 'mobile' | 'tablet',
          browser: deviceInfo.browser,
          browserVersion: deviceInfo.browser_version,
          os: deviceInfo.os,
          osVersion: deviceInfo.os_version,
          isMobile: deviceInfo.device === 'mobile',
          isTablet: deviceInfo.device === 'tablet',
          isDesktop: deviceInfo.device === 'desktop'
        };
        this.updateDeviceInfo();
        
        // Set the granular device type based on window width
        const width = window.innerWidth;
        const deviceType = this.determineDeviceTypeFromWidth(width);
        let granularDeviceType: DeviceType;

        if (deviceType === 'mobile') {
          granularDeviceType = width <= parseInt(this.BREAKPOINTS.MOBILE_SMALL_MAX) 
            ? DeviceType.MobileSmall 
            : DeviceType.MobileLarge;
        } else if (deviceType === 'tablet') {
          granularDeviceType = width <= parseInt(this.BREAKPOINTS.TABLET_SMALL_MAX)
            ? DeviceType.TabletSmall
            : DeviceType.TabletLarge;
        } else {
          if (width <= parseInt(this.BREAKPOINTS.LAPTOP_SMALL_MAX)) {
            granularDeviceType = DeviceType.LaptopSmall;
          } else if (width <= parseInt(this.BREAKPOINTS.LAPTOP_LARGE_MAX)) {
            granularDeviceType = DeviceType.LaptopLarge;
          } else if (width <= parseInt(this.BREAKPOINTS.DESKTOP_SMALL_MAX)) {
            granularDeviceType = DeviceType.DesktopSmall;
          } else {
            granularDeviceType = DeviceType.DesktopLarge;
          }
        }

        this.log('📱 Granular device type determined:', {
          baseType: deviceType,
          granularType: granularDeviceType,
          screenWidth: width
        });

        this.deviceTypeSubject.next(granularDeviceType);
        return; // ⚠️ Important: This return prevents fallback from running
      }
    } catch (error) {
      this.log('❌ Primary device detector failed, falling back to window measurements:', error);
    }

    this.log('🔄 Using fallback window measurements detection');
    
    // Fallback to window measurements only if primary detector failed
    const mobileSmallQuery = `(max-width: ${this.BREAKPOINTS.MOBILE_SMALL_MAX})`;
    const mobileLargeQuery = `(min-width: ${this.BREAKPOINTS.MOBILE_SMALL_MAX}) and (max-width: ${this.BREAKPOINTS.MOBILE_LARGE_MAX})`;
    const tabletSmallQuery = `(min-width: ${this.BREAKPOINTS.MOBILE_LARGE_MAX}) and (max-width: ${this.BREAKPOINTS.TABLET_SMALL_MAX})`;
    const tabletLargeQuery = `(min-width: ${this.BREAKPOINTS.TABLET_SMALL_MAX}) and (max-width: ${this.BREAKPOINTS.TABLET_LARGE_MAX})`;
    const laptopSmallQuery = `(min-width: ${this.BREAKPOINTS.TABLET_LARGE_MAX}) and (max-width: ${this.BREAKPOINTS.LAPTOP_SMALL_MAX})`;
    const laptopLargeQuery = `(min-width: ${this.BREAKPOINTS.LAPTOP_SMALL_MAX}) and (max-width: ${this.BREAKPOINTS.LAPTOP_LARGE_MAX})`;
    const desktopSmallQuery = `(min-width: ${this.BREAKPOINTS.LAPTOP_LARGE_MAX}) and (max-width: ${this.BREAKPOINTS.DESKTOP_SMALL_MAX})`;
    const desktopLargeQuery = `(min-width: ${this.BREAKPOINTS.DESKTOP_SMALL_MAX})`;

    const breakpointSub = this.breakpointObserver
      .observe([
        mobileSmallQuery,
        mobileLargeQuery,
        tabletSmallQuery,
        tabletLargeQuery,
        laptopSmallQuery,
        laptopLargeQuery,
        desktopSmallQuery,
        desktopLargeQuery
      ])
      .pipe(
        distinctUntilChanged((prev, curr) => {
          return JSON.stringify(prev.breakpoints) === JSON.stringify(curr.breakpoints);
        }),
        map(result => {
          this.log('📐 Fallback: Checking media queries...', {
            matches: Object.entries(result.breakpoints)
              .filter(([_, matches]) => matches)
              .map(([query]) => query)
          });
          
          // Check breakpoints in ascending order and map to DeviceType enum
          if (result.breakpoints[mobileSmallQuery]) {
            this.deviceInfo.deviceType = 'mobile';
            return DeviceType.MobileSmall;
          }
          if (result.breakpoints[mobileLargeQuery]) {
            this.deviceInfo.deviceType = 'mobile';
            return DeviceType.MobileLarge;
          }
          if (result.breakpoints[tabletSmallQuery]) {
            this.deviceInfo.deviceType = 'tablet';
            return DeviceType.TabletSmall;
          }
          if (result.breakpoints[tabletLargeQuery]) {
            this.deviceInfo.deviceType = 'tablet';
            return DeviceType.TabletLarge;
          }
          if (result.breakpoints[laptopSmallQuery]) {
            this.deviceInfo.deviceType = 'desktop';
            return DeviceType.LaptopSmall;
          }
          if (result.breakpoints[laptopLargeQuery]) {
            this.deviceInfo.deviceType = 'desktop';
            return DeviceType.LaptopLarge;
          }
          if (result.breakpoints[desktopSmallQuery]) {
            this.deviceInfo.deviceType = 'desktop';
            return DeviceType.DesktopSmall;
          }
          // Default to DesktopLarge
          this.deviceInfo.deviceType = 'desktop';
          return DeviceType.DesktopLarge;
        }),
        distinctUntilChanged(),
        tap(deviceType => {
          this.log('🎯 Fallback: Device type determined:', deviceType);
          this.deviceTypeSubject.next(deviceType);
          this.updateDeviceInfo();
        })
      )
      .subscribe();

    this.subscriptions.add(breakpointSub);
  }

  /**
   * Get detailed device information
   */
  public getDetailedDeviceInfo(): { brand: string; model: string; fullName: string } {
    if (!isPlatformBrowser(this.platformId)) {
        return { brand: 'Unknown', model: 'Unknown', fullName: 'Unknown Device' };
    }

    const ua = navigator.userAgent;
    const uaLower = ua.toLowerCase();
    
    // Initialize with unknown values
    let brand = 'Unknown';
    let model = 'Unknown';
    let fullName = 'Unknown Device';

    // Try to detect brand first
    if (uaLower.includes('iphone') || uaLower.includes('ipad')) {
        brand = 'Apple';
        // Try to extract iPhone/iPad model
        const iosMatch = ua.match(/(?:iPhone|iPad)(?:\s+(\d{1,2}(?:\s*(?:Plus|Pro|Pro\s+Max|mini))?))?\s*;/i);
        if (iosMatch && iosMatch[1]) {
            model = iosMatch[1];
            fullName = `${brand} ${model}`;
        } else {
            model = uaLower.includes('iphone') ? 'iPhone' : 'iPad';
            fullName = model;
        }
    } else if (uaLower.includes('samsung')) {
        brand = 'Samsung';
        const samsungMatch = ua.match(/SM-([A-Z]\d{3,4}[A-Z]?)/i);
        if (samsungMatch) {
            model = `Galaxy ${samsungMatch[1]}`;
            fullName = `${brand} ${model}`;
        } else {
            model = 'Galaxy Device';
            fullName = `${brand} ${model}`;
        }
    } else if (uaLower.includes('pixel')) {
        brand = 'Google';
        const pixelMatch = ua.match(/Pixel\s*(\d+(?:\s*(?:XL|Pro|Pro\s+Max|a))?)/i);
        if (pixelMatch) {
            model = `Pixel ${pixelMatch[1]}`;
            fullName = model;
        } else {
            model = 'Pixel Device';
            fullName = `${brand} ${model}`;
        }
    } else {
        // Try to extract any meaningful device information
        const genericMatch = ua.match(/;\s*([A-Za-z0-9-]+(?:\s+[A-Za-z0-9-]+)*)\s*(?:build|[;)])/i);
        if (genericMatch && genericMatch[1]) {
            const deviceInfo = genericMatch[1].trim();
            if (deviceInfo.toLowerCase() !== 'android' && deviceInfo !== 'Linux') {
                model = deviceInfo;
                fullName = deviceInfo;
                
                // Try to extract brand from model
                const possibleBrands = ['Huawei', 'OnePlus', 'Xiaomi', 'OPPO', 'Vivo', 'Realme', 'Motorola', 'Nokia', 'LG', 'Asus', 'Sony'];
                for (const brandName of possibleBrands) {
                    if (deviceInfo.toLowerCase().includes(brandName.toLowerCase())) {
                        brand = brandName;
                        model = deviceInfo.replace(new RegExp(brandName, 'i'), '').trim();
                        fullName = deviceInfo;
                        break;
                    }
                }
            }
        }
    }

    // If we still have unknown values, try platform-specific detection
    if (brand === 'Unknown' && model === 'Unknown') {
        if (uaLower.includes('android')) {
            brand = 'Android';
            model = 'Device';
            fullName = 'Android Device';
        } else if (uaLower.includes('windows')) {
            brand = 'Windows';
            model = 'PC';
            fullName = 'Windows PC';
        } else if (uaLower.includes('macintosh')) {
            brand = 'Apple';
            model = 'Mac';
            fullName = 'Mac Device';
        } else if (uaLower.includes('linux')) {
            brand = 'Linux';
            model = 'Device';
            fullName = 'Linux Device';
        }
    }

    return { brand, model, fullName };
  }
} 