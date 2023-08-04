import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { KidsComponent } from './kids/kids.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenComponent } from './men/men.component';
import { MobileComponent } from './mobile/mobile.component';
import { NavDemoComponent } from './nav-demo/nav-demo.component';
import { RegisterComponent } from './register/register.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: NavDemoComponent },
  {path: 'men', component: MenComponent },
  {path: 'women', component: WomenComponent },
  {path: 'kid', component: KidsComponent },
  {path: 'laptop', component: LaptopComponent },
  {path: 'mobile', component: MobileComponent },
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'contactus', component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
