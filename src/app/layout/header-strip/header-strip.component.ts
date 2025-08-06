import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-strip.component.html',
  styleUrl: './header-strip.component.scss'
})
export class HeaderStripComponent {
  contactInfo = {
    phone: '+971 4 123 4567',
    email: 'info@damico.com',
    address: 'Dubai, UAE'
  };

  socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'linkedin', url: '#' },
    { icon: 'instagram', url: '#' }
  ];
} 