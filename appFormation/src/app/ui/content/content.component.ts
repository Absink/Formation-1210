import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open: boolean;

  constructor(private us: UsersService) { }

  ngOnInit(): void {
    this.open = false;
  }

  public switch(): void {
    this.open = !this.open;
  }

  public deconnect(): void {
    // this.us.getByUsernameAndPassword2('user1', 'user1').subscribe(data => {
    //   localStorage.username = data[0].username;
    //   localStorage.id = data[0].id;
    // })
    localStorage.removeItem('id');
    
  }

}
