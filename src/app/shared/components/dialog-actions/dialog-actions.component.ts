import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-actions',
  templateUrl: './dialog-actions.component.html',
  styleUrls: ['./dialog-actions.component.css']
})
export class DialogActionsComponent {
  @Output()
  public cancelAction: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public saveAction: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

}
