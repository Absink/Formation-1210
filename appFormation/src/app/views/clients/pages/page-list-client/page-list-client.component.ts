import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../../../core/services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public collectionClients: Observable<Client[]>;
  public headers: string[];
  public statesClient = Object.values(StateClient);
  public btn: BtnI;
  public btn2: BtnI;
  public filtered: boolean;

  public a: string;
  public b: string;

  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.filtered = false;
    this.a = 'Clients';
    this.b = 'List of client';
    this.btn = { label: 'Add Client', route: 'add' }
    this.btn2 = { label: 'Filter', action: true }
    this.headers = [ 'Id', 'Name', 'CA', 'Commentaire', 'TVA', 'Total', 'Etat']
    this.collectionClients = this.cs.collection;
  }

  public changeState(client: Client, event): void {
    this.cs.updateState(client, event.target.value).subscribe(data => client.state = data.state);
  }

}
