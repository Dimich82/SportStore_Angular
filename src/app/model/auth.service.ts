import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService
{
	constructor(private rds: RestDataSource) {}

	authenticate(username: string, password: string): Observable<boolean>
	{
		return this.rds.autenticate(username, password);
	}

	get authenticated(): boolean
	{
		return this.rds.auth_token != null;
	}

	clear()
	{
		this.rds.auth_token = null;
	}
}