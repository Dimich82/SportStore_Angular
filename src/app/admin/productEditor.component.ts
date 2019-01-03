import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/products.repository";

@Component
({
	moduleId: module.id,
	templateUrl: "productEditor.component.html"
})

export class ProductEditorComponent
{
	editing: boolean = false;
	prod: Product = new Product();
	categories: string[];
	curCategory: string;
	newCategory: string = '';

	constructor(private prodRep: ProductRepository, private router: Router, activeRoute: ActivatedRoute)
	{
		this.categories = prodRep.getCategories();
		this.curCategory = this.categories[0];

		this.editing = activeRoute.snapshot.params["mode"] == "edit";
		if (this.editing)
		{
			Object.assign(this.prod, prodRep.getProduct(activeRoute.snapshot.params["id"]));
			this.curCategory = this.prod.category;
		}
	}

	addNewCategory()
	{
		if (this.newCategory != '')
		{
			this.categories.push(this.newCategory);
			this.curCategory = this.newCategory;
		}
	}

	onChange(cat)
	{
		// смена выбора в списке
	}

	saveProd(form: NgForm)
	{
		this.prod.category = this.curCategory;
		this.prodRep.saveProduct(this.prod);
		this.router.navigateByUrl("/admin/main/products");
	}
}