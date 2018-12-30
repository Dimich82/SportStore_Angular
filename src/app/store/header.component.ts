import { Component } from "@angular/core";

@Component
({
	moduleId: module.id,
	selector: "store-head",
	templateUrl: "header.component.html"
})

export class HeaderComponent
{
	private _title: string = "Спортивный магазин";

	get title()
	{
		return this._title;
	}
}