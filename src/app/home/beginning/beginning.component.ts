import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.component.html',
  styleUrls: ['./beginning.component.css']
})
export class BeginningComponent {

  url: any;
  phone: string = "3216339624";
  msg: string = "Hola tu caja."

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
