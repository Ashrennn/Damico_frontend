/**
 * Production Environment Configuration
 */
export const environment = {
  production: true,
  hmr: false,
  // Network Configuration
  host: 'localhost',
  port: 4200,
  // API Configuration
  apiUrl: 'https://api.damico.ae',
  // Device Detection Settings
  deviceDetection: {
    enableLocationServices: true,
    enableHardwareDetection: true,
    enableNetworkMonitoring: true
  }
}; 