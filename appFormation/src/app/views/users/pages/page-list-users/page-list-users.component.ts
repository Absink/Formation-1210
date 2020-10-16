import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { RoleUser } from 'src/app/shared/enums/role-user.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public users: User[] = [];
  public headers: string[];
  public roles = Object.values(RoleUser)
  public btnAddUser: BtnI;
  public userConnected: boolean;
  public user: User;
  public role: string;

  constructor(
    private us: UsersService
  ) { }

  ngOnInit(): void {
    this.solution1();
    // this.solution2();

    // this.us.getAll().subscribe(datas => this.users = datas);
  }

  public updateRole(user: User, event) {
    console.log('test ok', user)
  }

  public solution1() : void {
    if (localStorage.id) {
      this.us.getById(localStorage.id).subscribe(data => {
        this.user = data;
        if (this.user.role === RoleUser.ADMIN) {
          this.us.getAll().subscribe(datas => this.users = datas);
        } else {
          this.users.push(this.user);
        }
        });
      this.userConnected = true;
      this.headers = ['ID', 'Username', 'Role'];
      this.btnAddUser = { label: 'Add User', route: 'add' };
    }
  }

  public solution2() : void {
    // TODO !!
    if (localStorage.id) {
      this.us.getById(localStorage.id).subscribe(data => {
        this.user = data;
        this.role = this.user.role;
        this.us.getAll().subscribe(datas => this.users = datas);
      }
        )
    }
    this.userConnected = true;
    this.headers = ['ID', 'Username', 'Role'];
    this.btnAddUser = { label: 'Add User', route: 'add' };
  }

}
