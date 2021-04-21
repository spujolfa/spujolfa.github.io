import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageworkComponent } from './pages/managework/managework.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: PortfolioComponent},
  {path:'work', component: WorkComponent},
  {path:'managework', component: ManageworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
