import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  public title: string = '';

  @Input()
  public buttonType: string = 'raised';

  @Input()
  public icon: string = '';

  @Input()
  public loading: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
