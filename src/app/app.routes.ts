import { Routes, RouterModule } from "@angular/router";
import { CategoriaListComponent } from "./components/categoria-list/categoria-list.component";
import { ModuleWithProviders } from "@angular/core";

export const ROUTES: Routes = [
    {path: 'categoria-list', component: CategoriaListComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);