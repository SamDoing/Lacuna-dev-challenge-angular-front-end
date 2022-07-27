import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users? : User[];

  constructor(private service: UserService,
              private router : Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((users : User[]) => {
      this.users = users;
    });
  }

  open(user : User){
     this.router.navigateByUrl(
        "user/id/jobs".replace("id", user.id.toString()));
  }
}
