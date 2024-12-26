import { Component } from '@angular/core';
import { NavbarComponent } from './shared';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
}
