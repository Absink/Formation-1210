import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Commande } from 'src/app/shared/models/commande.model';
import { TypeCommande } from 'src/app/shared/enums/type-commande.enum';


@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  private pCollection: Observable<Commande[]>;
  private urlApi: string = environment.url;

  constructor(private http: HttpClient) {

    this.collection = this.http.get<Commande[]>(`${this.urlApi}orders`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Commande(obj);
        })
      })
    );
  }


  // Getter
  public get collection(): Observable<Commande[]> {
    return this.pCollection;
  }

  // Setter
  public set collection(col: Observable<Commande[]>) {
    this.pCollection = col;
  }

  // Get by ID
  public getById(id_order: number): Observable<Commande> {
    // return this.http.get<Order>(`${this.urlApi}orders?id=${id_order}`).pipe(
    return this.http.get<Commande>(`${this.urlApi}orders/${id_order}`).pipe(
      map(jsonObject => {
        return new Commande(jsonObject)
      })
    )
  }

  // Update
  public update(order: Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.urlApi}orders/${order.id}`, order);
  }

  // Update State
  public updateType(commande: Commande, type: TypeCommande): Observable<Commande> {
    const obj = new Commande({...commande});
    obj.typeCommande = type;
    // Send microservice
    return this.update(obj);
  }

  // Get with filter by Type
  public getFilterByType(type: TypeCommande): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.urlApi}orders`).pipe(
      map(datas => datas
        .filter(data => data.typeCommande === type)
          .map(filterData => new Commande(filterData))
        )
    )
  }

  // Add
  public add(order: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.urlApi}orders`, order);
  }
}
