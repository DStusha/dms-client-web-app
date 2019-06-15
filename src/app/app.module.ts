import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentication/auth.component';
import { AdminComponent } from './administration/administration.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';

const appRoutes: Routes =[
  { path: '', component: AuthComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'reg', component: RegistrationComponent},
  { path: 'main', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MainModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
