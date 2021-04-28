import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [ 
    
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
     
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


