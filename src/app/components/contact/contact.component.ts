import { Component, Input } from '@angular/core';
import { contactConfig } from './contact.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
    contact: contactConfig[] = [
      {
        iconUrl: '../../../assets/img/ico-inst.svg',
        link: '',
        icon: true
      },
      {
        iconUrl: '../../../assets/img/ico-wsp.svg',
        link: 'https://wa.me/56945888215',
        icon: true
      },
      {
        name: '+56 94588 8215',
        link: 'tel:+56945888215',
        icon: false
      },
    ]
}
