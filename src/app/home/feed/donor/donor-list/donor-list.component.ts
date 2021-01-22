import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.scss']
})
export class DonorListComponent implements OnInit {

  user: User[] = [];
  donor: [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getDonor();
  }

  getDonor() {
    this.userService.getUsers()
    .subscribe(user => {
      this.user = user;

        this.user.map(val => {
          if(val.isDonate == true)
          {
              this.donor.push();
          }
        });

    });
  }

}
