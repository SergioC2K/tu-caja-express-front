import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-toolbar',
  templateUrl: './dialog-toolbar.component.html',
  styleUrls: ['./dialog-toolbar.component.css']
})
export class DialogToolbarComponent implements OnInit {
  @Input()
  public title: string = '';

  @Input()
  public icon: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
