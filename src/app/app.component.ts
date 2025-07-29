import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeaderbarComponent, HomeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedDeviceType = 'laptop-small';
}
