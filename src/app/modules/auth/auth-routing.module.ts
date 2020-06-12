import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
// import { BalanceModule} from './balance';
// import { LeavesModule } from '';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path: '**',
    redirectTo:'/home',pathMatch:'full'
}
];

@NgModule({
  
  imports: [
   RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
