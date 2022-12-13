import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../shared";
import { MaterialModule } from "../../material.module";
import { SearchGuideComponent } from "./search-guide.component";


@NgModule({
  declarations: [SearchGuideComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class SearchGuideModule {
}
