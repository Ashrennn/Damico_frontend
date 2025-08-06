import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() padding: string = '4rem 0';
  @Input() maxWidth: string = '1200px';
  @Input() layout: 'grid' | 'flex' | 'list' = 'grid';
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