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
    const urlList = this.navigationList[0].items.concat(this.navigationList[1].items);
    const currentPage = urlList.filter((item: any) => item.url === value.url)[0];
    this.toolbarImage = currentPage.icon;
    this.toolbarTitle = currentPage?.title;
  }
}
