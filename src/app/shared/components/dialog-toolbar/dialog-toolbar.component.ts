import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dialog-toolbar",
  templateUrl: "./dialog-toolbar.component.html",
  styleUrls: ["./dialog-toolbar.component.css"]
})
export class DialogToolbarComponent {
  @Input()
  public title: string = "";

  @Input()
  public icon: string = "";

  constructor() {
  }

}
