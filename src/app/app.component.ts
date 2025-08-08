import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './layout/loader/loader.component';
import { HeaderStripComponent } from './layout/header-strip/header-strip.component';
import { HeaderBarComponent } from './layout/header-bar/header-bar.component';
import { FooterBarComponent } from './layout/footer-bar/footer-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    LoaderComponent,
    HeaderStripComponent, 
    HeaderBarComponent, 
    FooterBarComponent, 
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedDeviceType = 'laptop-small';
  isHeaderBarHidden = false;

  /**
   * Handle header bar toggle based on dropdown state
   * @param shouldHide - Boolean indicating if header bar should be hidden
   */
  onHeaderBarToggle(shouldHide: boolean): void {
    this.isHeaderBarHidden = shouldHide;
    console.log('Header bar visibility:', shouldHide ? 'hidden' : 'visible');
  }
}
