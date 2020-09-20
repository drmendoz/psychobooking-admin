import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ChartsModule } from 'ng2-charts';
import { CitasComponent } from './pages/citas/citas.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoRatingComponent } from './pages/grafico-rating/grafico-rating.component';
import { GraficoBarrasComponent } from './pages/grafico-barras/grafico-barras.component';
import { PieConsultasComponent } from './pages/pie-consultas/pie-consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    InicioComponent,
    CitasComponent,
    GraficoRatingComponent,
    GraficoBarrasComponent,
    PieConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
