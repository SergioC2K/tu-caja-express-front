import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zone-and-prices",
  templateUrl: "./zone-and-prices.component.html",
  styleUrls: ["./zone-and-prices.component.css"]
})
export class ZoneAndPricesComponent implements OnInit {
  list: any[] = [
    {
      name: 'Photos',
    },
    {
      name: 'Recipes',
    },
    {
      name: 'Work',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {

  }

  public deletePackage(): void {

  }
}
