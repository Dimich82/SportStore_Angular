import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminHeaderComponent } from "./adminHeader.component";

@Component
({
	moduleId: module.id,
	templateUrl: "auth.component.html",
	styleUrls: ['./admin.component.css']
})

export class AuthComponent
{
	public username: string;
	public password: string;
	public errMsg: string;

	constructor(private router: Router) {}

	authenticate(form: NgForm)
	{
		if (form.valid)
		{
			this.errMsg = null;
			this.router.navigateByUrl("/admin/main");
		}
		else
			this.errMsg = "Хреновый ввод на форме";
	}
}