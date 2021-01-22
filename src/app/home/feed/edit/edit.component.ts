import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {}

  onSubmit(form: NgForm) {
  this.route.params.subscribe(params => {
        var id = params['id'];
        this.userService.getUser(id).subscribe(user => {
          if(id == user.id) {
            user.isDonate = true;
            user.donateDate = form.value;
            console.log(user.donateDate);

            this.userService.putUser(user).subscribe();
          }
        });
      });

    this.router.navigate(['/home']);
  }


}
