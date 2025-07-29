/**
 * Device detection and information gathering utilities
 */

const isBrowser = typeof window !== 'undefined';

/**
 * Gets the device pixel ratio and determines if the device has a Retina display
 */
export const getScreenProperties = () => {
  if (!isBrowser) {
    return {
      pixelRatio: 1,
      isRetina: false,
      colorDepth: 24
    };
  }
  
  const pixelRatio = window.devicePixelRatio || 1;
  const colorDepth = window.screen?.colorDepth || 24;
  
  return {
    pixelRatio,
    isRetina: pixelRatio >= 2,
    colorDepth
  };
};

/**
 * Gets the actual device dimensions considering orientation and scaling
 */
export const getDeviceDimensions = () => {
  if (!isBrowser) {
    return {
      screenWidth: 1920,
      screenHeight: 1080,
      actualWidth: 1920,
      actualHeight: 1080
    };
  }

  // Get the physical screen dimensions
  const screenWidth = window.screen?.width || window.innerWidth;
  const screenHeight = window.screen?.height || window.innerHeight;

  // Get the actual viewport dimensions
  const actualWidth = Math.round(window.innerWidth);
  const actualHeight = Math.round(window.innerHeight);

  return {
    screenWidth,
    screenHeight,
    actualWidth,
    actualHeight
  };
};

/**
 * Determines device orientation
 */
export const getDeviceOrientation = (): 'portrait' | 'landscape' => {
  if (!isBrowser) {
    return 'landscape';
  }
  if (window.screen.orientation) {
    return window.screen.orientation.type.includes('portrait') ? 'portrait' : 'landscape';
  }
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

/**
 * Gets device capabilities with enhanced touch detection
 */
export const getDeviceCapabilities = () => {
  if (!isBrowser) {
    return {
      touchCapable: false,
      maxTouchPoints: 0,
      hasCamera: false,
      hasMicrophone: false,
      hasAccelerometer: false,
      hasGyroscope: false,
      deviceMemory: undefined,
      hardwareConcurrency: undefined
    };
  }

  const nav = navigator as any;
  
  // Enhanced touch detection using modern APIs
  const touchCapable = (
    ('ontouchstart' in window) ||
    (nav.maxTouchPoints > 0) ||
    (nav.msMaxTouchPoints > 0) ||
    // Modern touch detection methods
    (window.matchMedia?.('(any-pointer: coarse)').matches) ||
    (window.matchMedia?.('(any-hover: none)').matches)
  );

  // Enhanced hardware detection
  const hasCamera = !!(
    nav.mediaDevices?.enumerateDevices ||
    nav.getUserMedia ||
    nav.webkitGetUserMedia ||
    nav.mozGetUserMedia ||
    nav.msGetUserMedia
  );

  const hasMicrophone = hasCamera; // Usually if camera is available, microphone is too

  return {
    touchCapable,
    maxTouchPoints: nav.maxTouchPoints || nav.msMaxTouchPoints || 0,
    hasCamera,
    hasMicrophone,
    hasAccelerometer: !!window.DeviceMotionEvent,
    hasGyroscope: !!window.DeviceOrientationEvent,
    deviceMemory: nav.deviceMemory,
    hardwareConcurrency: nav.hardwareConcurrency || navigator.hardwareConcurrency
  };
};

/**
 * Gets network information with enhanced detection
 */
export const getNetworkInfo = () => {
  if (!isBrowser) {
    return {
      isOnline: true,
      connectionType: undefined
    };
  }

  const nav = navigator as any;
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
  
  return {
    isOnline: navigator.onLine,
    connectionType: connection?.type || connection?.effectiveType || (navigator.onLine ? 'online' : 'offline')
  };
};

/**
 * Estimates device age based on model and OS version
 * This is a basic implementation and should be enhanced with a proper device database
 */
export const estimateDeviceAge = (model: string, osVersion: string): string => {
  // This should be implemented with a proper device database
  // Current implementation returns 'unknown' as it requires extensive device data
  return 'unknown';
};

/**
 * Formats browser information
 */
export const formatBrowserInfo = (browser: string, version: string): string => {
  return `${browser} ${version}`.trim();
};

/**
 * Checks if the device screen matches Retina display criteria
 */
export const isRetinaDisplay = (): boolean => {
  if (!isBrowser) return false;
  const ratio = window.devicePixelRatio || 1;
  return ratio >= 2;
}; 