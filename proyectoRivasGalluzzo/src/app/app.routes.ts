import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/registration.component';
import { LoginComponent } from './account/login.component';
import { HomeComponent } from './home/home';

const routes: Routes = [
  //{ path: '', component: HomeComponent }, // Ruta para el HomeComponent
  { path: 'registrar', component: RegisterComponent }, // Ruta para el RegistrationComponent
  { path: 'login', component: LoginComponent }, // Ruta para el LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
