import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateursService } from 'src/app/core/services/utilisateurs.service';
import { Utilisateur } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public formUser: FormGroup;
  public user: Utilisateur = new Utilisateur();

  constructor(
    private fb: FormBuilder,
    private us: UtilisateursService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formUser = this.fb.group ({
      username: [this.user.username],
      password: [this.user.pass]
    })
    // this.user.username = this.formUser.get('username').toString();
    // this.user.password = this.formUser.get('password').toString();
  }

  public onSubmit(): void {
    // this.us.getByUsernameAndPassword2(this.user.username, this.user.password).subscribe(data => console.log(data[0]))
    // this.us.getByUsernameAndPassword2(this.formUser.value('username'), this.formUser.value('password')).subscribe(data => console.log(data[0]))
    this.us.getByUsernameAndPassword2('admin', 'admin').subscribe(data => {
      if (data[0]) {
        localStorage.id = data[0].id;
        localStorage.username = data[0].username;
        this.router.navigate(['/home']);
      }
    });
  }

  public connectUser() {
    this.us.getByUsernameAndPassword2('user2', 'user2').subscribe(data => {
      if (data[0]) {
        localStorage.id = data[0].id;
        localStorage.username = data[0].username;
        this.router.navigate(['/home']);
      }
    });
  }

}
