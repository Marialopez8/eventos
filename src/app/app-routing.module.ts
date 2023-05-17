import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
const routes: Routes=[
  {path:'',redirectTo:'/comics',pathMatch:'full'},
  {path:'comics',component:ComicsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
