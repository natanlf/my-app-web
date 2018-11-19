import { Routes, RouterModule } from "@angular/router";
import { CategoriaListComponent } from "./components/categoria-list/categoria-list.component";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";

export const ROUTES: Routes = [
    {path: 'categoria-list', component: CategoriaListComponent},
    {path: 'login', component: LoginComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);