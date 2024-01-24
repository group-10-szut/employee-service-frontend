import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Event, Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddEmployeeButtonComponent } from './components/buttons/add-employee-button/add-employee-button.component';
import {
  AddQualificationButtonComponent
} from './components/buttons/add-qualification-button/add-qualification-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    AddEmployeeButtonComponent,
    AddQualificationButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.info("Current route: ", this.currentRoute);
      }
    });
  }
}
