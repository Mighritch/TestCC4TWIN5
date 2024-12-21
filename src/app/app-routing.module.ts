import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './app/not-found/not-found.component';

const routes: Routes = [
  { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },  
  { path: '', redirectTo: 'team/showteams', pathMatch: 'full' },  
  { path: '**', component: NotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
