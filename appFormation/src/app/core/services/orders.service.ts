import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private urlApi: string = environment.url;

  constructor(private http: HttpClient) {

    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Order(obj);
        })
      })
    );
  }


  // Getter
  public get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // Setter
  public set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  // Get by id
  public getById(id_order: number): Observable<Order> {
    // return this.http.get<Order>(`${this.urlApi}orders?id=${id_order}`).pipe(
    return this.http.get<Order>(`${this.urlApi}orders/${id_order}`).pipe(
      map(jsonObject => {
        return new Order(jsonObject)
      })
    )
  }

  // Update
  public update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${order.id}`, order);
  }

  // Update State
  public updateState(order: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...order});
    obj.state = state;
    // Send microservice
    return this.update(obj);
  }

  // Get with filter by state
  public getFilterByState(state: StateOrder): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map(datas => datas
        .filter(data => data.state === state)
          .map(filterData => new Order(filterData))
        )
    )
  }

  // Add order
  public add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, order);
  }


}
