import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { ProductRepository } from "./products.repository";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule
({
	imports: [HttpModule],
	providers: [ProductRepository, Cart, Order, OrderRepository,
		{provide: StaticDataSource, useClass: RestDataSource}]
})

export class ModelModule {};
