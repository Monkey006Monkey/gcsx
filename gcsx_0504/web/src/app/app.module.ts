import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDetailComponent } from '../component/user-detail/user-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { SginInComponent } from '../component/sgin-in/sgin-in.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    SginInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
