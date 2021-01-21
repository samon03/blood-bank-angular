import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegstrationComponent } from './home/regstration/regstration.component';
import { FeedComponent } from './home/feed/feed.component';
import { RequestComponent } from './home/Feed/request/request.component';
import { EditComponent } from './home/Feed/edit/edit.component';
import { DonorComponent } from './home/Feed/donor/donor.component';
import { FeedbackComponent } from './home/feedback/feedback.component';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegstrationComponent,
    FeedComponent,
    RequestComponent,
    EditComponent,
    DonorComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
