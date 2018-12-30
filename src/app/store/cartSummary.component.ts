import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Cart } from "../model/cart.model";

@Component
({
	selector: "cart-summary",
	moduleId: module.id,
	templateUrl: "cartSummary.component.html"
})

export class CartSummaryComponent
{
	constructor (public cart: Cart, private router: Router) {}

	goToCart()
	{
		this.router.navigateByUrl("/cart");
	}
}