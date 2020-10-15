import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  // public collectionOrder: Order[];
  public collectionOrderObservable: Observable<Order[]>;
  public collectionHeaders: string[];
  public states = Object.values(StateOrder);

  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;

  constructor(
    private os: OrdersService
  ) { }

  ngOnInit(): void {
    this.implementBtns();
    this.collectionHeaders = ['Type', 'Client', 'Nb jours', 'TJM HT', 'Total HT', 'Total TTC', 'Date', 'Etat'];
    this.collectionOrderObservable = this.os.collection;
    // this.os.collection.subscribe(orders => {
    //   this.collectionOrder = orders;
    //   console.log(this.collectionOrder)
    // })

    // this.os.getFilterByState(StateOrder.OPTION).subscribe(orders => this.collectionOrder = orders)
  }

  // ngOnDestroy(): void {
  //   this.os.collection.subscribe().unsubscribe();
  // }

  public changeState(order: Order, event) {
    this.os.updateState(order, event.target.value).subscribe(data => {
      console.log("Before", order.state);
      order.state = data.state;
      console.log("After", order.state);
    })
  }

  public implementBtns(): void {
    this.btnRoute = { label: 'Add an order', route: 'add' }
    this.btnHref = { label: 'Go to google', href: 'http://www.google.fr' }
    this.btnAction = { label: 'Open popup', action: true }
  }

  public openPopup(): void {
    console.log('open popup ok');
  }

}
