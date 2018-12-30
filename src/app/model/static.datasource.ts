import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Observable } from "rxjs";
import { from } from 'rxjs/observable/from';

@Injectable()
export class StaticDataSource
{
	private products: Product[] =
	[
		new Product(1, "DF well fit", "Леска", "Летняя леска", 55, "src/app/img/DF-LINE-WFS23-100.png"),
		new Product(2, "DF ultra light", "Леска", "Спининговая леска", 75, "src/app/img/DF-LINE-UL014-100.png"),
		new Product(3, "TS Black Arrow", "Удилище", "Офигеть спининг", 3160, "src/app/img/TS-BA-10-M.png"),
		new Product(4, "TS North South", "Удилище", "Офигеть спининг", 1743, "src/app/img/TS-NS-9-M.png"),
		new Product(5, "ВА Well Fit Heavy", "Удилище", "Офигеть фидер", 2761, "src/app/img/DF-SBL-GN-20LB-150.png")
	];

	getProducts(): Observable<Product[]>
	{
		return from([this.products]);
	}

	saveOrder(order: Order): Observable<Order>
	{
		console.log(JSON.stringify(order));
		return from([order]);
	}
}