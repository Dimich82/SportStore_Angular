import { Component } from "@angular/core";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";

@Component
({
	moduleId: module.id,
	templateUrl: "orderTable.component.html"
})

export class OrderTableComponent
{
	includeShipped: boolean = false;

	constructor(private orderRep: OrderRepository) {}

	getOrders(): Order[]
	{
		return this.orderRep.getOrders().filter(o => this.includeShipped || !o.shipped);
	}

	markShipped(order: Order)
	{
		order.shipped = true;
		this.orderRep.updateOrder(order);
	}

	deleteOrder(id: number)
	{
		this.orderRep.deleteOrder(id);
	}
}