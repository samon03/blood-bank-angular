import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-regstration',
  templateUrl: './regstration.component.html',
  styleUrls: ['./regstration.component.scss']
})
export class RegstrationComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(user => {
      console.log(user);
      this.router.navigate(['/home']);
    });

  }

}
