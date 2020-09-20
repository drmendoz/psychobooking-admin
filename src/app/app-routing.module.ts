import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CitasComponent } from './pages/citas/citas.component';
import { HomeGuard } from './guards/home.guard';
import { GraficoRatingComponent } from './pages/grafico-rating/grafico-rating.component';
import { GraficoBarrasComponent } from './pages/grafico-barras/grafico-barras.component';
import { PieConsultasComponent } from './pages/pie-consultas/pie-consultas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,children:[
    {path: 'citas', component: CitasComponent},
    {path: 'grafico-rating', component: GraficoRatingComponent},
    {path: 'grafico-barras', component: GraficoBarrasComponent},
    {path: 'pie-consultas', component: PieConsultasComponent}
  ]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
