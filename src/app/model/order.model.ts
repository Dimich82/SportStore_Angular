import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order
{
	public id: number;
	public name: string;
	public country: string;
	public city: string;
	public street: string;
	public home: string;
	public postind: string;
	public zip: string;
	public shipped: boolean = false;

	constructor(public cart: Cart) {}

	clear()
	{
		this.id = null;
		this.name = null;
		this.country = null;
		this.city = null;
		this.street = null;
		this.home = null;
		this.postind = null;
		this.zip = null;
		this.shipped = false;
		
		this.cart.clear();
	}
}