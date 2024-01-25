import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { QualificationListComponent } from './components/qualification-list/qualification-list.component';

// Reference: https://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/
export const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'qualifications', component: QualificationListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/employees', pathMatch: 'full' }, // if url is unknown - redirect to employees page
];
