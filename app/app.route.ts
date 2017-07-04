import { Route, Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EmpHomeComponent } from './emp.home.component';
import { EmpListComponent } from './emp.list.component';
import { EmpDetailComponent } from './emp.detail.component';
import { OverviewComponent } from './overview.component';
import { BioComponent } from './bio.component';

const indexRoute: Route = {
	path: "",
	component: EmpHomeComponent
};

const fallBankRoute: Route = {
	path: "**",
	component: EmpHomeComponent
};

const routes: Routes = [
	{path: "home", component: EmpHomeComponent },
	{path: 'emplist', component: EmpListComponent },
	{path: 'emplist/:id', component: EmpDetailComponent,
		children: [
			{path: 'overview', component: OverviewComponent},
			{path: 'bio', component: BioComponent},
			{path: '', pathMatch: 'full', redirectTo: 'overview'}
		]
	},
	indexRoute,
	fallBankRoute
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
