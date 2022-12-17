import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminNavigationConstant } from "../../shared";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {

  public navigationList = AdminNavigationConstant;
  public toolbarImage: string = "";
  public toolbarTitle: string = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getRoute({ url: this.router.url.split("/").pop() as string, sectionName: "home" });
  }

  public getRoute(value: { url: string, sectionName: string }): void {
    const mapUrl = this.navigationList;
    const filter = mapUrl.filter(item => item.sectionName === value.sectionName)[0];
    const currentPage = filter.items.filter((item: any) => item.url === value.url)[0];
    this.toolbarImage = currentPage?.icon === undefined ? 'home' : currentPage?.icon;
    this.toolbarTitle = currentPage?.title === undefined ? 'Inicio' : currentPage?.title;
  }
}
