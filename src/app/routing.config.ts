import { Routes } from "@angular/router";
import { HomeComponent } from './views/home/home.component';
import { OfertasComponent } from './views/ofertas/ofertas.component';
import { CartaComponent } from './views/carta/carta.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'carta', component: CartaComponent}
];
