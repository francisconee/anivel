import { Component } from '@angular/core';
import { menuConfig } from './menu.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  menu: menuConfig[] = [
    {
      name: 'Trabajos',
      link: '#trabajos'
    },
    {
      name: 'Quienes somos',
      link: 'quienes-somos'
    },
    {
      name: 'Contacto',
      link: 'contacto'
    },
  ]
}
