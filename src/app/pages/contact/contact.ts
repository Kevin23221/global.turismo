import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm!: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) {
    //Creamos el formulario con validaciones básicas
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['',[Validators.required, Validators.minLength(5)]],
      mensaje: ['',[Validators.required, Validators.minLength(10)]],
      telefono: ['',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }
  //Devuelve los controles de forma que en plantilla podamos usar f.nombre
  get f(): any {
    return this.contactForm.controls; 
  }

  cancelar() {
    if (this.submitting) return;
    this.contactForm.reset();
  }

  enviar(): void{
    //Mostrar errores visuales
    this.contactForm.markAllAsTouched();

    //Si hay errores, no continuará
    if (this.contactForm.invalid) {
      return;
    }
    this.submitting = true;

    //Preparamos los datos (trim sencillo)
    const payload = {
      nombre: (this.f.nombre.value || '').trim(),
      email: (this.f.email.value || '').trim(),
      asunto: (this.f.asunto.value || '').trim(),
      mensaje: (this.f.mensaje.value || '').trim(),
      telefono: (this.f.telefono.value || '').trim(),
      createdAt: new Date().toISOString()
    };

    try{
      //descargamos JSON en el navegador
      const text = JSON.stringify(payload, null, 2);
      const blob = new Blob([text], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'contacto.json';
      
      //necesario en algunos navegadores
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      //reset simple
      this.contactForm.reset();
    } catch (err) {
      console.error('Error al descargar JSON:', err);
      alert('No fue posible descargar el  archivo.')
    }finally{
      this.submitting = false;
    }
  }
}
