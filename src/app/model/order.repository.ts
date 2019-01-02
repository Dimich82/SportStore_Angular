import { Injectable } from "@angular/core";
import { Order } from "./order.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { Observable } from "rxjs";
import { from } from 'rxjs/observable/from';

@Injectable()
export class OrderRepository
{
	private orders: Order[] = [];
	private loaded: boolean = false;

	constructor(private dataSource: RestDataSource) {}

	loadOrders()
	{
		this.loaded = true;
		this.dataSource.getOrders().subscribe(o => this.orders = o);
	}

	getOrders(): Order[]
	{
		return this.orders;
	}

	saveOrder(order: Order): Observable<Order>
	{
		return this.dataSource.saveOrder(order);
	}

	updateOrder(order: Order)
	{
		this.dataSource.updateOrder(order).subscribe(o =>
		{
			this.orders.splice(this.orders.findIndex(o1 => o1.id == order.id), 1, order);
		});
	}

	deleteOrder(id: number)
	{
		this.dataSource.deleteOrder(id).subscribe(o =>
		{
			this.orders.splice(this.orders.findIndex(o1 => o1.id == id), 1);
		});
	}
}