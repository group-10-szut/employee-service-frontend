import {Component} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public sharedService : SharedService) {

  }

  showEmployeeForm() {
    sharedService.showEmployeeForm();
  }
}
