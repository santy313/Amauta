import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { JuridicoComponent } from './features/juridico/juridico.component';
import { ExtranjeriaComponent } from './features/extranjeria/extranjeria.component';
import { AseguradoraComponent } from './features/aseguradora/aseguradora.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'juridico', component: JuridicoComponent },
  { path: 'extranjeria', component: ExtranjeriaComponent },
  { path: 'aseguradora', component: AseguradoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
