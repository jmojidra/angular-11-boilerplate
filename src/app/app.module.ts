import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [
    AppComponent,
    LandingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
