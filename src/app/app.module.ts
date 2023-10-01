import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';
import { AccountsModule } from './accounts/accounts.module';
import { JobsModule } from './jobs/jobs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,

    AuthModule,
    LandingModule,
    AccountsModule,
    JobsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
