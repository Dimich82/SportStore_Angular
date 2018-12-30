import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/products.repository";
import { Cart } from "../model/cart.model";
import { HeaderComponent } from "./header.component";

@Component
({
	selector: "store",
	moduleId: module.id,
	templateUrl: "store.component.html"
})

export class StoreComponent
{
	public selectedCat = null;
	public prodPerPage = 4;
	public selectedPage = 1;

	constructor(private repository: ProductRepository, private cart: Cart, private router: Router) {}

	get products(): Product[]
	{
		let ind = (this.selectedPage - 1) * this.prodPerPage;
		return this.repository.getProducts(this.selectedCat)
			.slice(ind, ind + this.prodPerPage);
	}

	get categories(): string[]
	{
		return this.repository.getCategories();
	}

	changeCategory(newCategory?: string)
	{
		this.selectedCat = newCategory;
	}

	changePage(nPage: number)
	{
		this.selectedPage = nPage;
	}

	changePageSize(pSize: number)
	{
		this.prodPerPage = Number(pSize);
		this.changePage(1);
	}

	get pageCount(): number
	{
		return Math.ceil(this.repository.getProducts(this.selectedCat).length / this.prodPerPage);
	}
	
	get pageNumbers(): number[]
	{
		return Array(Math.ceil(this.repository.getProducts(this.selectedCat).length / this.prodPerPage))
			.fill(0).map((x, i) => i + 1);
	}

	addProductToCart(p: Product)
	{
		this.cart.addLine(p);
		//this.router.navigateByUrl("/cart");
	}
}