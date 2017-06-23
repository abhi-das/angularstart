import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home.page.component';
import { ProductPageComponent } from './product.page.component';

const appRoutes = [
	{path: "home", component: HomePageComponent },
	{path: "product", component: ProductPageComponent },
	{path: "", pathMatch: "full", redirectTo: "home"}
];

export const Routing = RouterModule.forRoot(appRoutes);