import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Job } from './../models/job.model';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.scss']
})
export class UserJobsComponent implements OnInit {
  username? : string;
  jobs : Job[] = [];
  id = 1;
  isGetLoading = false;

  constructor(private jobService: JobService,
              private userService: UserService,
              private route : ActivatedRoute,
              private router : Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.jobService.getAll(this.id)
        .subscribe((jobs : Job[]) => {
          this.jobs = jobs;
          this.jobs.forEach(j => j.doing = false);
      }, () => this.router.navigateByUrl("dashboard"));

      this.userService.getById(this.id)
        .subscribe((user : User) =>
             this.username = user.username);
    }, () => this.router.navigateByUrl("dashboard"));
  }

  getJob() {
    this.isGetLoading = true;
    this.jobService.getAJob(this.id).subscribe(
      (job : Job) => {
        this.ngOnInit();
        this.isGetLoading = false;
      }
    );
  }
  doJob(job : Job) {
    job.doing = true;
    this.jobService.doAJob(job.id).subscribe(
      () => {
        job.doing = false;
        this.ngOnInit();
      }
    );
  }
}
