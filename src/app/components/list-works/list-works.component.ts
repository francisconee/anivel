import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { worksConfig } from '../card-work/card-work.config';
import { Router } from '@angular/router';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-list-works',
  templateUrl: './list-works.component.html',
  styleUrls: ['./list-works.component.sass']
})
export class ListWorksComponent implements OnInit {
  works: worksConfig[]=[];
  worksB: worksConfig[]= [];
  loading = false;
  


  filtrarPorTipo(tipo: string): void {

    console.log('Tipo:', tipo)
    this.works = this.worksB.filter(work => work.type === tipo);
    this.loading = true;
    console.log('Trabajos filtrados:', this.works);

    this.loading = false;
    this.cdr.detectChanges();

  }
  mostrarTodos(): void {
    this.loading = true;
    const works = this.worksB; // Almacenar el resultado de getWork() en una variable

    works.forEach(work => {
      work.visible = true;
    });
    this.works = works;
    this.tiposUnicos = [...new Set(works.map(work => work.type))];
    console.log('Tipos existentes:', this.tiposUnicos);
    this.loading = false;
  }
  tiposUnicos: string[] = [];
  obtenerTiposUnicos() {
    this.workservice.getWork().subscribe(works => {
      this.tiposUnicos = [...new Set(works.map(work => work.type))];
    });
    return this.tiposUnicos;
  }

  constructor(public router: Router, private workservice: WorkService, private cdr: ChangeDetectorRef) {
    this.works = [{
      title: '',
      subtitle: '',
      type: '',
      image: '',
      visible: true,
      id: ''
    }]
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  ngOnInit(): void {
    this.workservice.getWork().subscribe(work =>{
      console.log(work);
      this.works = work
      this.worksB = work
    })
  }

  onCardClick(id: string) {
    this.router.navigate(['/detalle', id]);
  }

}
