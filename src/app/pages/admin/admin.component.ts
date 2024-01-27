import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { worksConfig } from 'src/app/components/card-work/card-work.config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {


  constructor(public router: Router, private fb: FormBuilder) {}


  ngOnInit(): void {
  }

  
  private generateUniqueId(): number {
    // Generar un ID único, puedes implementar esto según tus necesidades
    return Math.floor(Math.random() * 1000);
  }
}
