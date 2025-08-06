import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() showOverlay: boolean = false;
  @Input() overlayOpacity: number = 0.5;
  @Input() height: string = 'auto';
  @Input() minHeight: string = '400px';
  @Input() padding: string = '4rem 0';
  @Input() alignContent: 'left' | 'center' | 'right' = 'center';
  @Input() customClass: string = '';
  
  @Output() sectionClick = new EventEmitter<void>();

  get sectionStyles() {
    return {
      'background-image': this.backgroundImage ? `url(${this.backgroundImage})` : 'none',
      'background-color': this.backgroundColor || 'transparent',
      'color': this.textColor || 'inherit',
      'height': this.height,
      'min-height': this.minHeight,
      'padding': this.padding
    };
  }

  get contentAlignment() {
    return `text-${this.alignContent}`;
  }

  onSectionClick() {
    this.sectionClick.emit();
  }
} 