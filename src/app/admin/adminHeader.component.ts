import { Component } from "@angular/core";

@Component
({
	moduleId: module.id,
	selector: "admin-head",
	templateUrl: "adminHeader.component.html"
})

export class AdminHeaderComponent
{
	private _title: string = "Спортивный магазин - Админка";

	get title()
	{
		return this._title;
	}
}