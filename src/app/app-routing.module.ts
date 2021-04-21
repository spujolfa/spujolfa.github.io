import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
