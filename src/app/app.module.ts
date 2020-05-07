import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { InventoryComponent } from './login/dashboard/inventory/inventory.component';
import { PoliciesComponent } from './login/dashboard/policies/policies.component';
import { SidebarComponent } from './login/dashboard/sidebar/sidebar.component';
import { ProfileComponent } from './login/dashboard/sidebar/profile/profile.component';
import { ClockComponent } from './login/dashboard/sidebar/clock/clock.component';
import { CalendarComponent } from './login/dashboard/sidebar/calendar/calendar.component';
import { ListComponent } from './login/dashboard/sidebar/list/list.component';
import { TaskService } from './task.service';
import { InventoryService } from './inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InventoryComponent,
    PoliciesComponent,
    SidebarComponent,
    ProfileComponent,
    ClockComponent,
    CalendarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
