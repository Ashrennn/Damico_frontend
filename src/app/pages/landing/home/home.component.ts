import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  // Services list
  services = [
    {
      image: '/assets/icons/marine-fuel.jpg',
      title: 'Marine Fuel Supply',
      subtitle: 'High-quality marine fuel solutions',
      description: 'Specialized in providing high-quality marine fuel solutions across the MENA region, ensuring reliable and efficient bunkering services for vessels.',
      date: { day: '15', month: 'APR' }
    },
    {
      image: '/assets/icons/trade-operations.jpg',
      title: 'Trade Operations',
      subtitle: 'Advanced trading desk operations',
      description: 'Advanced trading desk operations managing commodity flows and risk exposure across international markets with cutting-edge technology.',
      date: { day: '12', month: 'APR' }
    },
    {
      image: '/assets/icons/vessel-brokerage.jpg',
      title: 'Vessel Brokerage',
      subtitle: 'Professional vessel brokerage services',
      description: 'Professional vessel brokerage services offering comprehensive solutions for maritime transportation and chartering needs.',
      date: { day: '10', month: 'APR' }
    },
    {
      image: '/assets/icons/lubricant-distribution.jpg',
      title: 'Lubricant Distribution',
      subtitle: 'High-performance marine lubricants',
      description: 'Distribution of high-performance marine lubricants, ensuring optimal engine performance and reliability for marine vessels.',
      date: { day: '08', month: 'APR' }
    },
    {
      image: '/assets/icons/technical-services.jpg',
      title: 'Technical Services',
      subtitle: 'Comprehensive technical support',
      description: 'Comprehensive technical support and consulting services for marine fuel management and optimization.',
      date: { day: '05', month: 'APR' }
    }
  ];

  // Damilube products
  damilubeProducts = [
    {
      image: '/assets/engine-coolant.jpg',
      label: 'Engine Coolant Oil'
    },
    {
      image: '/assets/engine-flush.jpg',
      label: 'Engine Flush'
    },
    {
      image: '/assets/gas-oil.jpg',
      label: 'Gas Oil'
    },
    {
      image: '/assets/lubricants.jpg',
      label: 'Lubricants'
    },
    {
      image: '/assets/lng.png',
      label: 'LNG High-Purity'
    }
  ];

  // Ship owner cards
  shipOwnerCards = [
    {
      image: '/assets/Cargo.jpg',
      title: 'Document Review'
    },
    {
      image: '/assets/Truck.jpg',
      title: 'Hull Inspection'
    },
    {
      image: '/assets/Cart.png',
      title: 'Technical Work'
    }
  ];

  // UAE Bunker cards
  uaeBunkerCards = [
    {
      image: '/assets/Truck.jpg',
      title: 'Supply Chain'
    },
    {
      image: '/assets/Cart.png',
      title: 'Logistics'
    },
    {
      image: '/assets/Cargo.jpg',
      title: 'Port Operations'
    }
  ];

  // Vessels count
  vesselsCount = '1,234';

  onSectionClick() {
    console.log('Section clicked!');
  }

  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
