import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]+$/)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      newsletter: [false]
    });
  }

  submitContact(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted', formData);
      
      // TODO: Kirim data ke backend API
      // this.authService.register(formData).subscribe(...)
    } else {
      console.log('Form is not valid');
    }
  }
}

//Tugas : Implementasikan form kontak di Contact Component
  //Gunakan Reactive Forms dengan validasi untuk:
  //Nama (required, min 2 karakter)
  //Email (required, format email valid)
  //Pesan (required, min 10 karakter)
  //
  //Tambahkan metode submitContact() untuk menangani pengiriman form
  //
  //Tampilkan pesan sukses atau error berdasarkan hasil pengiriman
