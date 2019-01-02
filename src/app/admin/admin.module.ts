import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AdminHeaderComponent } from "./adminHeader.component";
import { AuthGuard } from "./auth.guard";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { OrderTableComponent } from "./orderTable.component";

let routing = RouterModule.forChild
([
	{path: "auth", component: AuthComponent},
	{
		path: "main", component: AdminComponent, canActivate: [AuthGuard],
		children:
		[
			{ path: "products/:mode/:id", component: ProductEditorComponent },
			{ path: "products/:mode", component: ProductEditorComponent },
			{ path: "products", component: ProductTableComponent },
			{ path: "orders", component: OrderTableComponent },
			{ path: "**", redirectTo: "products" }
		]
	},
	{path: "**", redirectTo: "auth"}
]);

@NgModule
({
	imports: [CommonModule, FormsModule, routing],
	providers: [AuthGuard],
	declarations: [AuthComponent, AdminComponent, AdminHeaderComponent, ProductTableComponent,
		ProductEditorComponent, OrderTableComponent]
})

export class AdminModule {}
