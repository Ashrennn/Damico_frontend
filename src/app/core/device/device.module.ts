import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DmcDeviceDetectorService } from './services/device-detector.service';

/**
 * ==========================================
 * DEVICE MODULE
 * File ID: [DMC-MOD-0001]
 * 
 * Core module that provides device detection
 * services and utilities
 * ==========================================
 * 
 * @description
 * This module encapsulates all device detection functionality,
 * including services for device information, screen size monitoring,
 * and responsive design support.
 * 
 * @usage
 * Import in AppModule or CoreModule:
 * ```typescript
 * @NgModule({
 *   imports: [
 *     DeviceModule
 *   ]
 * })
 * ```
 * 
 * @providers
 * - DeviceDetectorService (from ngx-device-detector)
 * - DmcDeviceDetectorService (enhanced custom service)
 * 
 * @lastModified 2024-03-19 17:45 UTC
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DeviceDetectorService,
    DmcDeviceDetectorService
  ]
})
export class DeviceModule { } 