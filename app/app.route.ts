import { Routes, RouterModule } from '@angular/router';
import { HomeDecoreComponent } from './home.decore.component';
import { BathProductComponent } from './bath.product.component';
import { ComputerGameComponent } from './computer.game.component';
import { MenuListComponent } from './menu.component';

const routes = [
	{path: 'home-decore', component: HomeDecoreComponent },
	{path: 'bath-product', component: BathProductComponent },
	{path: 'computer-game', component: ComputerGameComponent },
	{path: 'home', component: MenuListComponent },
	{path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const AppRoute = RouterModule.forRoot(routes);