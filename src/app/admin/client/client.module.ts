import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { ClientDialogComponent } from "./client-dialog";
import { ComponentsModule } from "../../shared";


@NgModule({
  declarations: [ClientComponent, ClientDialogComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ClientModule {
}
