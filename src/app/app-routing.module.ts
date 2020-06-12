import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [

    {path:'default',
    component:DefaultComponent,
    children:[{
        path: 'default',
        component:DashboardComponent
    }]
}
    // {
    //     path: 'home',
    //     loadChildren:'src\app\modules\navigation\navigation.module#NavigationModule'

    // },
    // {
    //     path: '',
    //     loadChildren: 'src\app\modules\auth\auth.module#AuthModule'

    // },
    
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
