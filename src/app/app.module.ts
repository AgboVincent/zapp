import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CheckboxModule} from 'angular-bootstrap-md';
import { MaterialModule} from './material.module';

import {  NO_ERRORS_SCHEMA,EventEmitter } from '@angular/core'; 
import { CollapseModule, WavesModule } from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ObjectiveComponent } from './objective/objective.component';
import { KeyResultComponent } from './key-result/key-result.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule, MatDivider, MatDividerModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { AreaComponent } from './shared/widgets/area/area.component';
import { HighchartsChartModule} from 'highcharts-angular'
import { CardComponent } from './shared/widgets/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    ObjectiveComponent,
    KeyResultComponent,
    MemberComponent,
    DashboardComponent,
    DefaultComponent,
    CardComponent,
   
    PageNotFoundComponent,
   
    HeaderComponent,
   
    FooterComponent,
   
    SidebarComponent,
    AreaComponent,
   
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    CheckboxModule,
    CollapseModule,
    MaterialModule,
    FormsModule,
    DefaultModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    HighchartsChartModule,
    MatTableModule,
    RouterModule.forRoot([
      
      {
        path: 'login',
        component:LoginComponent
      },
      // {
      //    path: 'default',
      //  component:DefaultComponent
      //   },
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'objective',
        component: ObjectiveComponent
      },
      {
        path: 'member',
        component: MemberComponent
       },
       {
        path: 'keyResult',
        component: KeyResultComponent
      },
      
    {path:'default',
    component:DefaultComponent,
    children:[{
        path: '',
        component:DashboardComponent
    }]
  },
      
    {
      path:'posts',
    component:DefaultComponent,
    children:[{
        path: '',
        component:PostsComponent
    }]
  }

  
     
    
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
