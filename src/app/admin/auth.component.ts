import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminHeaderComponent } from "./adminHeader.component";
import { AuthService } from "../model/auth.service";

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

	constructor(private router: Router, private auth: AuthService) {}

	authenticate(form: NgForm)
	{
		if (form.valid)
		{
			this.errMsg = null;
			this.auth.authenticate(this.username, this.password)
				.subscribe(responce => 
				{
					if (responce)
						this.router.navigateByUrl("/admin/main");
					else
						this.errMsg = "Не прошли проверку";
				})
			
		}
		else
			this.errMsg = "Хреновый ввод на форме";
	}
}