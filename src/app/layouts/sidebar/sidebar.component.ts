import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminNavigationConstant} from '../../shared';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public navigationList = AdminNavigationConstant;
  public toolbarImage: string = '';
  public toolbarTitle: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getRoute(this.router.url.split('/').pop());
  }

  public getRoute(value: any): void {
    const currentPage = this.navigationList.filter((item) => item.url === value)[0];
    this.toolbarImage = currentPage.icon;
    this.toolbarTitle = currentPage.title;
  }
}
