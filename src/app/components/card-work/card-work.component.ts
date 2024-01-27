import { Component, Input } from '@angular/core';
import { worksConfig } from './card-work.config';

@Component({
  selector: 'app-card-work',
  templateUrl: './card-work.component.html',
  styleUrls: ['./card-work.component.sass']
})
export class CardWorkComponent {
  @Input() public work!: worksConfig;

  constructor() {}
}
