import { Component } from "@angular/core";
//import { Router } from '@angular/router';
//import { Product } from "../model/product.model";

@Component
({
	selector: "slider",
	moduleId: module.id,
	templateUrl: "slider.component.html"
})

export class SliderComponent
{
	public images: string[];
	private actImg: number = 0;

	constructor() {}

	get len(): number
	{
		return this.images.length;
	}

	getActiveImg(): string
	{
		return this.images[this.actImg];
	}
}