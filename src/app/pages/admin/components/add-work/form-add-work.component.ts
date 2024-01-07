import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkService } from 'src/app/services/work.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { worksConfig } from 'src/app/components/card-work/card-work.config';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-form-add-work',
  templateUrl: './form-add-work.component.html',
  styleUrls: ['./form-add-work.component.sass'],
  providers: [ToastrService],
})
export class FormAddWorkComponent {

  works: worksConfig[] = [
    { 
      image: '',
      title: '',
      subtitle: '',
      type: '',
      visible: true,
      id: '',
      description: ''
    }
  ];
  images: string[] = [];
  trabajoEnEdicion: worksConfig = {
    image: '',
    title: '',
    subtitle: '',
    type: '',
    visible: true,
    id: '',
    description: ''
  };
  formulario: FormGroup;

  @ViewChild('exampleModal') exampleModal!: ElementRef;

  // Variable para almacenar la URL de la imagen
  imageUrl: string = '';

  constructor(private fb: FormBuilder, private storage: Storage, private workService: WorkService, private cdr: ChangeDetectorRef, private toastr:ToastrService) {
    this.formulario = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      id: [''] // Asegúrate de tener un campo oculto para el id
    });
  }

  async onSubmit() {
    try {
      if (this.formulario.valid) {
        const id = new Date().getTime().toString(); // o cualquier lógica para generar un ID
        this.formulario.patchValue({ id }); // Asigna el ID al campo id del formulario
  
        const workData = { ...this.formulario.value, image: this.imageUrl };
        const response = await this.workService.addWork(workData);
  
        this.resetForm();
        this.imageUrl = '';
      } else {
        console.error('Por favor, complete todos los campos requeridos.');
      }
    } catch (error) {
      console.error('Error al agregar el trabajo', error);
    }
  }
  resetForm() {
    this.formulario.reset();
  }

  async uploadImage($event: any) {
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `images/${file.name}`);

    try {
      // Sube la imagen al almacenamiento de Firebase
      await uploadBytes(imgRef, file);

      // Obtén la URL de la imagen después de subirla
      this.imageUrl = await getDownloadURL(imgRef);

      // Notifica a Angular sobre el cambio
      this.cdr.detectChanges();
    } catch (error) {
      console.log('Error al subir la imagen:', error);
    }
  }


  ngOnInit(): void {
    this.workService.getWork().subscribe(work =>{
      console.log(work);
      this.works = work
    })
    this.getImages();
  }
  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error => console.log(error));
  }

  async deleteWork(work: worksConfig){
   const response = await this.workService.deleteWork(work);
   console.log(response)
  }

  editWork(work: worksConfig) {
    this.trabajoEnEdicion = { ...work };
    // Inicializa el formulario con los datos del trabajo en edición
    this.formulario.patchValue({
      title: this.trabajoEnEdicion.title,
      subtitle: this.trabajoEnEdicion.subtitle,
      type: this.trabajoEnEdicion.type,
      image: this.trabajoEnEdicion.image,
      description: this.trabajoEnEdicion.description,
      id: this.trabajoEnEdicion.id
    });
  
    // Abre el modal
  }
  guardarCambios() {
    const id = this.trabajoEnEdicion?.id;
    
    console.log("este es el id:" + id);
    
    if (id) {
      const workData = { ...this.formulario.value, image: this.imageUrl };
    
      this.workService.editWork({ ...workData, id })
        .then(() => {
          this.toastr.success('Cambios guardados con éxito');
          // Asegúrate de usar la referencia correcta
          this.exampleModal.nativeElement.click(); // Cierra el modal
        })
        .catch(error => {
          console.error('Error al guardar los cambios:', error);
          this.toastr.error('Error al guardar los cambios');
        });
    } else {
      console.error('ID de trabajo no válido:', id);
    }
  }
 
}
