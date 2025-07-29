/**
 * ==========================================
 * DEVICE INFO INTERFACE
 * File ID: [DMC-INT-0001]
 * 
 * Core device information interface that defines
 * all device detection properties and capabilities
 * ==========================================
 * 
 * @description
 * Comprehensive device information interface that combines
 * basic and enhanced device detection properties. This interface
 * serves as the central type definition for all device-related
 * information throughout the application.
 * 
 * @usage
 * ```typescript
 * import { DeviceInfo } from '@core/device/interfaces/device-info.interface';
 * 
 * // In a service
 * export class MyService {
 *   private deviceInfo: DeviceInfo;
 *   
 *   updateDeviceInfo(info: DeviceInfo) {
 *     this.deviceInfo = {
 *       ...info,
 *       isRetina: window.devicePixelRatio > 1
 *     };
 *   }
 * }
 * ```
 * 
 * @properties
 * Core Properties (Always Available):
 * - deviceType: Base device category
 * - browser: Browser name and details
 * - os: Operating system information
 * - deviceModel: Specific device model
 * - manufacturer: Device manufacturer
 * 
 * Enhanced Properties (Optional):
 * - Screen: dimensions, orientation
 * - Capabilities: touch, camera, sensors
 * - Performance: memory, CPU cores
 * - Network: connection status and type
 * 
 * @implementation
 * This interface is implemented by the DmcDeviceDetectorService
 * to provide comprehensive device information across the
 * application. Properties are populated based on available
 * browser APIs and device detection libraries.
 * 
 * @lastModified 2024-03-19 17:45 UTC
 */
export interface DeviceInfo {
    // ==========================================
    // CORE DEVICE PROPERTIES
    // Required properties that are always available
    // ==========================================
    
    /** Base device category */
    deviceType: 'mobile' | 'tablet' | 'desktop';
    
    /** Browser name and version */
    browser: string;
    browserVersion: string;
    
    /** Operating system details */
    os: string;
    osVersion: string;
    
    /** Device hardware information */
    deviceModel: string;
    manufacturer: string;
    
    /** Browser and system details */
    userAgent: string;
    browser_engine: string;
    
    /** Device type flags */
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;

    // ==========================================
    // ENHANCED DEVICE PROPERTIES
    // Optional properties based on available APIs
    // ==========================================
    
    /** Screen dimensions and properties */
    screenWidth?: number;
    screenHeight?: number;
    actualWidth?: number;
    actualHeight?: number;
    pixelRatio?: number;
    colorDepth?: number;
    isRetina?: boolean;
    
    /** Device orientation */
    orientation?: 'portrait' | 'landscape';
    
    /** Touch capabilities */
    touchCapable?: boolean;
    maxTouchPoints?: number;
    
    /** Device location */
    location?: GeolocationPosition;
    
    /** Network information */
    isOnline?: boolean;
    connectionType?: string;
    
    /** Performance metrics */
    deviceMemory?: number;
    hardwareConcurrency?: number;
    
    /** Device age and identification */
    estimatedDeviceAge?: string;
    brand?: string;
    fullName?: string;
    
    /** Hardware capabilities */
    hasCamera?: boolean;
    hasMicrophone?: boolean;
    hasAccelerometer?: boolean;
    hasGyroscope?: boolean;
} 