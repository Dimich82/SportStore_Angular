import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { HeaderComponent } from "./header.component";

@Component
({
	moduleId: module.id,
	templateUrl: "cartDetail.component.html"
})

export class CartDetailComponent
{
	constructor (public cart: Cart) {}
}