import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Observable } from "rxjs";
import { from } from 'rxjs/observable/from';
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource
{
	baseUrl: string;
	auth_token: string;

	constructor(private http: Http)
	{
		this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
		this.auth_token = null;
	}

	autenticate(user: string, pass: string): Observable<boolean>
	{
		let req = new Request
		({
			method:RequestMethod.Post,
			url: this.baseUrl + "login",
			body: {name: user, password: pass}
		});

		return this.http.request(req).map(response => 
		{
			let r = response.json();
			this.auth_token = r.success ? r.token : null;
			return r.success;
		});
	}

	getProducts(): Observable<Product[]>
	{
		return this.sendRequest(RequestMethod.Get, "products");
	}

	saveProduct(p: Product): Observable<Product>
	{
		return this.sendRequest(RequestMethod.Post, "products", p, true);
	}

	updateProduct(p: Product): Observable<Product>
	{
		return this.sendRequest(RequestMethod.Put, `products/${p.id}`, p, true);
	}

	deleteProduct(id: number): Observable<Product>
	{
		return this.sendRequest(RequestMethod.Delete, `products/${id}`, null, true);
	}

	getOrders(): Observable<Order[]>
	{
		return this.sendRequest(RequestMethod.Get, "orders", null, true);
	}

	saveOrder(order: Order): Observable<Order>
	{
		return this.sendRequest(RequestMethod.Post, "orders", order);
	}

	deleteOrder(id: number): Observable<Order[]>
	{
		return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null, true);
	}

	updateOrder(o: Order): Observable<Order>
	{
		return this.sendRequest(RequestMethod.Put, `orders/${o.id}`, o, true);
	}
	
	private sendRequest(verb: RequestMethod, url: string, body?: Product | Order, auth: boolean = false):
		Observable<Product | Product[] | Order | Order[]>
	{
		let req = new Request
		({
			method: verb,
			url: this.baseUrl + url,
			body: body
		});

		if (auth && this.auth_token != null)
			req.headers.set("Authorization", `Bearer<${this.auth_token}>`);

		return this.http.request(req).map(response => response.json());
	}
}