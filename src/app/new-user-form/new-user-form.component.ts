import { UserCreate } from './../models/user-create.model';
import { UserService } from './../services/user.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent {
  username  = "";
  email     = "";
  password  = "";
  isLoading = false;

  constructor(private service : UserService, private router : Router){
  }

  submit(){
    this.isLoading = true;
    const user : UserCreate = {
      username : this.username,
      email : this.email,
      password : this.password
    };
    this.service.createUser(user).subscribe(
      () => this.router.navigateByUrl("dashboard"),
      err =>
      {
          console.log(err);
          this.isLoading = false;
      }
      );
  }
}
