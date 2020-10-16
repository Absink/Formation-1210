import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { RoleUser } from 'src/app/shared/enums/role-user.enum';
import { User } from 'src/app/shared/models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent implements OnInit {

  public user = new User();
  public roles = Object.values(RoleUser);
  public form: FormGroup;
  public access: boolean;
  public title: string;

  constructor(
    private formBuilder: FormBuilder,
    private us: UsersService,
    private router: Router,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.title = 'User Management';
    this.us.getById(localStorage.id).subscribe(data => {
      console.log(data)
      if (data.role === RoleUser.ADMIN) {
        this.access = true;
      } else {
        this.access = false;
      }
    })
    this.form = this.formBuilder.group({
      username: [this.user.username, Validators.required ],
      password: [this.user.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      role : [this.user.role, Validators.required ]
    })
  }

  public onSubmit(): void {
    this.us.add(this.form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/users']);
    });
  }

  public back(): void {
    // this.router.navigate(['/users']);
    this.location.back();
  }

}
