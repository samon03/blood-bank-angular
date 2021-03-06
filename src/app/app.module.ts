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
import { DonateComponent } from './home/Feed/donate/donate.component';
import { DonorListComponent } from './home/Feed/Donor/donor-list/donor-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    DonateComponent,
    DonorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
