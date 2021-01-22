import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Requester } from 'src/app/models/requester';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  reqUser: Requester[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
     this.requestService.getRequester().subscribe(reqUser => {
         this.reqUser = reqUser;
     })
  }

}
