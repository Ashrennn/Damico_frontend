import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss'
})
export class FooterBarComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = {
    company: [
      { name: 'About Us', route: '/about' },
      { name: 'Our Team', route: '/about/team' },
      { name: 'History', route: '/about/history' },
      { name: 'Careers', route: '/careers' }
    ],
    services: [
      { name: 'Operations', route: '/operations' },
      { name: 'Bunkering', route: '/bunkering' },
      { name: 'Library', route: '/library' },
      { name: 'DMC CSR', route: '/dmc-csr' }
    ],
    support: [
      { name: 'Contact', route: '/contact' },
      { name: 'Support', route: '/support' },
      { name: 'Privacy Policy', route: '/privacy' },
      { name: 'Terms of Service', route: '/terms' }
    ]
  };

  socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'linkedin', url: '#' },
    { icon: 'instagram', url: '#' }
  ];
} 