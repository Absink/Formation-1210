import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';
import { RoleUser } from 'src/app/shared/enums/role-user.enum';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})
export class FormAddUserComponent implements OnInit {

  // @Input() user = new User();
  // @Output() clicked: EventEmitter<User> = new EventEmitter();

  // public roles = Object.values(RoleUser);
  // public formUser: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.formUser = this.fb.group({
    //   username: [this.order.typePresta, Validators.required],
    //   password: [this.order.client, Validators.compose([Validators.required, Validators.minLength(3)])],
      // role: [this.order.nbJours],
      // tjmHT: [this.order.tjmHT],
      // tva: [this.order.tva],
      // comment: [this.order.comment],
      // date: [this.order.date],
      // state: [this.order.state]
    // })
  }

}
