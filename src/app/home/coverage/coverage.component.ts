import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css']
})
export class CoverageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  url: any;
  phone: string = "3216339624";
  msg: string = "Hola tu caja, me entere que puedes ser mi aliado!"

  public isMobile() {
    return (
      (navigator.userAgent.match(/Android/i)) ||
      (navigator.userAgent.match(/webOS/i)) ||
      (navigator.userAgent.match(/iPhone/i)) ||
      (navigator.userAgent.match(/iPod/i)) ||
      (navigator.userAgent.match(/iPad/i)) ||
      (navigator.userAgent.match(/BlackBerry/i))
    );
  }
  openWhatsAppLink() {
    var opcion = "web";
    if (this.isMobile()) {
      opcion = "api";
    }
    this.url = "https://" + opcion + ".whatsapp.com/send?phone=57" + this.phone + "&text=" + this.msg;
    window.open(this.url, '_blank');
  }
}
