import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'src/app/core/services/utilisateurs.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open: boolean;

  constructor(private us: UtilisateursService) { }

  ngOnInit(): void {
    this.open = false;
  }

  public switch(): void {
    this.open = !this.open;
  }

  public deconnect(): void {
    localStorage.removeItem('id');
  }

}
