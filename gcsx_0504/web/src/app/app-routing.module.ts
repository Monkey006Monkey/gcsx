import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from '../component/user-detail/user-detail.component';
import { SginInComponent } from '../component/sgin-in/sgin-in.component';

const routes: Routes = [
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'sgin-in', component: SginInComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
