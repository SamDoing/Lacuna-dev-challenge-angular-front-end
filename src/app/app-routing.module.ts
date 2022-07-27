import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NewUserFormComponent } from "./new-user-form/new-user-form.component";
import { UserJobsComponent } from "./user-jobs/user-jobs.component";

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new-user', component: NewUserFormComponent},
  {path: 'user/:id/jobs', component: UserJobsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
