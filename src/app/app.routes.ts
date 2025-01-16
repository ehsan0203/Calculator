import { Routes } from '@angular/router';
import { HeaderComponent } from './Conponents/header/header.component';
import { NavbarComponent } from './Conponents/navbar/navbar.component';

export const routes: Routes = [
    {redirectTo: 'home', path: 'root', pathMatch: 'full'},
    {path:'header' , component: HeaderComponent},
    {path:'navbar' , component: NavbarComponent},
];
