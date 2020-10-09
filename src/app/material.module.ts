import { NgModule } from '@angular/core';

import {
  //MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  
  
} from '@angular/material';
import { RouterModule } from '@angular/router';
//import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    //MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    //AdminComponent
    
  ],
  exports: [
    //MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    //AdminComponent
    
  ]
})
export class MaterialModule {}