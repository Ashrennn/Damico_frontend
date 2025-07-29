/**
 * ==========================================
 * DEVELOPMENT ENVIRONMENT CONFIGURATION
 * File ID: DMC-ENV-0001
 * 
 * Responsibilities:
 * - Environment flags
 * - Network configuration
 * - API endpoints
 * - Device detection settings
 * ==========================================
 */

/**
 * Development Environment Configuration
 * @description Configuration for development environment with HMR enabled
 */
export const environment = {
  /**
   * Production flag
   * @type {boolean}
   */
  production: false,

  /**
   * Hot Module Replacement flag
   * @type {boolean}
   */
  hmr: true,

  /**
   * Network Configuration
   * @description Settings for network connectivity
   */
  host: '0.0.0.0',  // Allow connections from any IP
  port: 4200,       // Default Angular port

  /**
   * API Configuration
   * @description Backend API endpoint configuration
   */
  apiUrl: 'http://localhost:3000',

  /**
   * Device Detection Settings
   * @description Configuration for device detection features
   */
  deviceDetection: {
    enableLocationServices: true,    // Enable geolocation features
    enableHardwareDetection: true,   // Enable hardware capability detection
    enableNetworkMonitoring: true    // Enable network status monitoring
  }
}; 