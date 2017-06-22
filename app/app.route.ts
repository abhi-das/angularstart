import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ExecutiveComponent } from './executive.component';


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: ':executive', component: ExecutiveComponent },
	{ path: '', pathMatch: 'full', redirectTo: "home" }
];

export const routing = RouterModule.forRoot(appRoutes);