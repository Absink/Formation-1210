import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../../../core/services/clients.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor(
    private cs: ClientsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'Add a client';
  }

  public create(client: Client): void {
    this.cs.add(client).subscribe(data => this.location.back());
  }

}
