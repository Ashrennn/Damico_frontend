import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() padding: string = '4rem 0';
  @Input() maxWidth: string = '1200px';
  @Input() layout: 'cards' | 'table' | 'timeline' | 'contact' = 'cards';
  @Input() columns: number = 3;
  @Input() gap: string = '2rem';
  @Input() customClass: string = '';
  
  @Output() sectionClick = new EventEmitter<void>();

  get sectionStyles() {
    return {
      'background-color': this.backgroundColor || 'transparent',
      'color': this.textColor || 'inherit',
      'padding': this.padding
    };
  }

  get gridStyles() {
    return {
      'grid-template-columns': `repeat(${this.columns}, 1fr)`,
      'gap': this.gap
    };
  }

  onSectionClick() {
    this.sectionClick.emit();
  }
} 