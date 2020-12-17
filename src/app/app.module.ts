import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './shared/components/input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { MomentPipe } from './core/pipes/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NotificationComponent,
    CalendarComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
