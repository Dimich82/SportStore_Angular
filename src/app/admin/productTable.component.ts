import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/products.repository";

@Component
({
	moduleId: module.id,
	templateUrl: "productTable.component.html"
})

export class ProductTableComponent
{
	constructor(private productsRep: ProductRepository) {}

	getProducts(): Product[]
	{
		return this.productsRep.getProducts();
	}

	deleteProduct(id: number)
	{
		this.productsRep.deleteProduct(id);
	}
}