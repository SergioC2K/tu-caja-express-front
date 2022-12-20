import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-servicespa',
  templateUrl: './home-servicespa.component.html',
  styleUrls: ['./home-servicespa.component.css']
})
export class HomeServicesPaComponent {

  url: any;
  phone: string = "3216339624";
  msg: string = "Hola tu caja, deseo conocer la oficina mas cercana!"

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
