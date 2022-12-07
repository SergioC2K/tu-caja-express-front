import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {

  @Output()
  public setCurrentRoute: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public menuList: any[] = [];

}
