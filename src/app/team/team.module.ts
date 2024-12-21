import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TeamRoutingModule } from './team-routing.module';
import { FormTeamComponent } from './form-team/form-team.component';
import { TeamsComponent } from './teams/teams.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';

@NgModule({
  declarations: [
    FormTeamComponent,
    TeamsComponent,
    MyTeamsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TeamRoutingModule
  ],
})
export class TeamModule {}
