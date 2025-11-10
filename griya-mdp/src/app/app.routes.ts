import { Routes } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { Contact } from './contact/contact';

export const routes: Routes = [
    // Mengatur halaman utama aplikasi
    {
        path : "",
        component : HomeComponent,
        title : "Home Page"
    },
    {
        path : "profile",
        component : Profile,
        // title : "Profile Page"
    },
    {
        path : "login",
        component : Login,
        // title : "Login Page"
    },
    {
        path : "register",
        component : Register,
        // title : "Home Page"
    },
    {
        path : "contact",
        component : Contact,
        // title : "Contact Page"
    }
];
