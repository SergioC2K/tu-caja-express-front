import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button-actions",
  templateUrl: "./button-actions.component.html",
  styleUrls: ["./button-actions.component.css"]
})
export class ButtonActionsComponent {

  @Input()
  public onEdit: boolean = false;

  @Input()
  public onSave: boolean = false;

  @Input()
  public onCreate: boolean = false;

  @Input()
  public onExport: boolean = false;

  @Input()
  public onDelete: boolean = false;

  @Output()
  public createAction: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public editAction: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public deleteAction: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public saveAction: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }
}
