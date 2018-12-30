import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AdminHeaderComponent } from "./adminHeader.component";

let routing = RouterModule.forChild
([
	{path: "auth", component: AuthComponent},
	{path: "main", component: AdminComponent},
	{path: "**", redirectTo: "auth"}
]);

@NgModule
({
	imports: [CommonModule, FormsModule, routing],
	declarations: [AuthComponent, AdminComponent, AdminHeaderComponent]
})

export class AdminModule {}
