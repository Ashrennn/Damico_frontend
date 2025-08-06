import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() padding: string = '4rem 0';
  @Input() maxWidth: string = '1200px';
  @Input() layout: 'split' | 'overlay' | 'stacked' = 'split';
  @Input() imagePosition: 'left' | 'right' = 'left';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() customClass: string = '';
  
  @Output() sectionClick = new EventEmitter<void>();

  get sectionStyles() {
    return {
      'background-color': this.backgroundColor || 'transparent',
      'color': this.textColor || 'inherit',
      'padding': this.padding
    };
  }

  get layoutClass() {
    return `layout-${this.layout} image-${this.imagePosition}`;
  }

  onSectionClick() {
    this.sectionClick.emit();
  }
} 