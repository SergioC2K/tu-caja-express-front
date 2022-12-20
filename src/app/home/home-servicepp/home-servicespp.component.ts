import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-servicespp',
  templateUrl: './home-servicespp.component.html',
  styleUrls: ['./home-servicespp.component.css']
})
export class HomeServicesPpComponent {

  url: any;
  phone: string = "3216339624";
  msg: string = "Hola Tu caja, tengo una duda!"

  public irWhatsapp() {
    var opcion = "web";
    if (this.isMobile()) {
      opcion = "api";
    }
    this.url = "https://" + opcion + ".whatsapp.com/send?phone=57" + this.phone + "&text=" + this.msg;
    window.open(this.url, '_blank');
  }

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

}
