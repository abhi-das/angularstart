import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NotificationComponent } from './notification.component';

const routes = [
	{path: 'dashboard', component: DashboardComponent },
	{path: 'notification', component: NotificationComponent},
	{path: '', pathMatch: 'full', redirectTo: 'notification'}
];

export const AppRouter = RouterModule.forRoot(routes);