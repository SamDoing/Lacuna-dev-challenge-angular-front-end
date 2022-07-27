import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserJobsComponent } from './user-jobs/user-jobs.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [	
    AppComponent,
    NewUserFormComponent,
    DashboardComponent,
    UserJobsComponent,
      LoadingComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
