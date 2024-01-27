import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { worksConfig } from 'src/app/components/card-work/card-work.config';
import { WorkService } from 'src/app/services/work.service';
import { Observable } from 'rxjs';
import { Firestore, collection, doc, DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.sass']
})
export class WorkDetailComponent implements OnInit {

  detalle: worksConfig | undefined;
  id: string = '';

  constructor(private route: ActivatedRoute, private workService: WorkService, private firestore: Firestore) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID:', this.id);  // Agrega esta línea
    
      // Obtener los detalles del trabajo usando el 'id'
      this.workService.getWorkById(this.id).subscribe(detalle => {
        this.detalle = detalle;
      });
    });
  }
}