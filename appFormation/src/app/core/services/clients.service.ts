import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Observable<Client[]>;
  private url: string = environment.url;

  constructor(
    private http: HttpClient
  ) {
    this.collection = this.http.get<Client[]>(`${this.url}clients`).pipe(
      map(tableauJson => {
        return tableauJson.map(objJson => {
          return new Client(objJson)
        })
      })
    )

  }



  // Getters and setters
  public get collection(): Observable<Client[]> {
    return this.pCollection
  }

  public set collection(col: Observable<Client[]>){
    this.pCollection = col;
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}clients/${client.id}`, client);
  }

  public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}clients`, client);
  }

}
