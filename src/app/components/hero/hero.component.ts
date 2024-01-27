import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent {
  tituloHero: string = "Calidad y eficiencia es lo que nos carcateriza"
  subtituloHero: string = "Pintura en casas, departamentos y oficinas."
}
