import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from '../home/feed/feed.component';
import { RequestComponent } from '../home/Feed/request/request.component';
import { DonorComponent } from '../home/Feed/donor/donor.component';
import { FeedbackComponent } from '../home/feedback/feedback.component';
import { RegstrationComponent } from '../home/regstration/regstration.component';
import { DonateComponent } from '../home/Feed/donate/donate.component';
import { EditComponent } from '../home/Feed/edit/edit.component';
import { DonorListComponent } from '../home/Feed/Donor/donor-list/donor-list.component';


const routes: Routes = [
  { path: 'home', component: FeedComponent},
  { path: 'registration', component: RegstrationComponent},
  { path: 'request', component: RequestComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'donor', component: DonorComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'donor-list', component: DonorListComponent},
  { path: ':id', component: EditComponent },
  { path: '', component: FeedComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
