import { Routes } from "@angular/router";
import { HomeComponent } from './views/home/home.component';
import { OfertasComponent } from './views/ofertas/ofertas.component';
import { PizzasComponent } from './views/pizzas/pizzas.component';
import { EntrantesComponent } from './views/entrantes/entrantes.component';
import { PostresComponent } from './views/postres/postres.component';



export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'pizzas', component: PizzasComponent},
  {path: 'entrantes', component: EntrantesComponent},
  {path: 'postres', component: PostresComponent},
];
