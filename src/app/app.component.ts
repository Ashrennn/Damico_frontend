/**
 * ==========================================
 * ROOT APPLICATION COMPONENT
 * File ID: DMC-CMP-0001
 * 
 * Responsibilities:
 * - Application shell setup
 * - Root level routing
 * - Core layout management
 * ==========================================
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Import PrimeNG components
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

/**
 * @component AppComponent
 * @description Root component of the application
 * 
 * @selector dmc-root
 * @implements Standalone component pattern
 */
@Component({
  selector: 'dmc-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Application title
   * @type {string}
   */
  title = 'Damico Energy';
}
