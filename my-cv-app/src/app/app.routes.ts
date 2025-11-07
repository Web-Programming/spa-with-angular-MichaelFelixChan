import { Routes } from '@angular/router';
import { Cv } from './cv/cv';      // Impor Komponen CV
import { Contact } from './contact/contact'; // Impor Komponen Kontak

export const routes: Routes = [
  // Definisikan path untuk Halaman CV
  { path: 'cv', component: Cv },
  // Definisikan path untuk Halaman Kontak
  { path: 'contact', component: Contact },
  // Redirect ke /cv jika tidak ada path yang cocok (halaman utama)
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  // Tambahkan path untuk halaman 404 (optional)
  // { path: '**', component: NotFoundComponent } 
];