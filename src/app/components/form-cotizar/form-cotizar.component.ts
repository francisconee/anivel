import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-cotizar',
  templateUrl: './form-cotizar.component.html',
  styleUrls: ['./form-cotizar.component.sass']
})
export class FormCotizarComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
  onSubmit(): void {
    // Puedes acceder a los valores del formulario y enviarlos al servicio aquí
    const formData = {
      // Agrega aquí los datos de tu formulario
    };

  }
}
