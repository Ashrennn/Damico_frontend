/**
 * ==========================================
 * APPLICATION CONFIGURATION
 * File ID: DMC-CFG-0001
 * 
 * Responsibilities:
 * - Core application providers setup
 * - Router configuration
 * - Zone.js optimization
 * - Client hydration setup
 * ==========================================
 */

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// PrimeNG Configuration
import { providePrimeNG } from 'primeng/config';

/**
 * Application Configuration
 * @description Configures core application providers and features
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Zone.js optimization for better performance
    provideZoneChangeDetection({ 
      eventCoalescing: true 
    }), 
    
    // Router configuration with defined routes
    provideRouter(routes), 
    
    // SSR hydration with event replay
    provideClientHydration(
      withEventReplay()
    ),

    // HTTP Client
    provideHttpClient(withFetch()),

    // Animations
    provideAnimationsAsync(),

    // PrimeNG Configuration with Theme
    providePrimeNG({
      ripple: true
    })
  ]
};
