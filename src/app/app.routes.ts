import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }, // if url is unknown - redirect to main page
];
