/**
 * ==========================================
 * MAIN APPLICATION ENTRY POINT
 * File ID: MAIN-BOOTSTRAP
 * 
 * Responsibilities:
 * - Application bootstrap configuration
 * - Environment configuration
 * - Root component initialization
 * ==========================================
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

/**
 * Enable production mode if environment is production
 */
if (environment.production) {
  enableProdMode();
}

/**
 * Bootstrap Function
 * Initializes the root component with application config
 */
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error('Bootstrap Error:', err));
