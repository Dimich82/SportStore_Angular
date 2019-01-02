import { Injectable } from "@angular/core";
import { Product } from "./product.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository
{
	private products: Product[] = [];
	private categories: string[] = [];

	constructor(private dataSource: RestDataSource)
	{
		dataSource.getProducts().subscribe
		(
			data => 
			{
				this.products = data,
				this.categories = data.map(p => p.category).
					filter((c, index, array) => array.indexOf(c) == index).sort()
			}
		)
	}

	getProducts(category: string = null): Product[]
	{
		return this.products.filter(p => category == null || category == p.category);
	}

	getProduct(id: number): Product
	{
		return this.products.find(p => p.id == id);
	}

	getCategories(): string[]
	{
		return this.categories;
	}

	saveProduct(p: Product)
	{
		if (p.id == null || p.id == 0)
			this.dataSource.saveProduct(p).subscribe(pr => this.products.push);
		else
			this.dataSource.updateProduct(p).subscribe(pr => 
			{
				this.products.splice(this.products.findIndex(pr1 => pr.id == p.id), 1, p);
			});
	}

	deleteProduct(id: number)
	{
		this.dataSource.deleteProduct(id).subscribe(p =>
		{
			this.products.splice(this.products.findIndex(p1 => p1.id == id), 1);
		});
	}
}