import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AddEmployeeFormularComponent } from './components/add-employee-formular/add-employee-formular.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, NavBarComponent, RouterOutlet, AddEmployeeFormularComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private keycloak: KeycloakService) {
  }

  public logout() {
    this.keycloak.logout().then(
      () => console.log("Successfully logged out.")  // TODO: Add confirmation?
    );
  }
}
