import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
const routes: Routes=[
  {path:'',redirectTo:'/comics',pathMatch:'full'},
  {path:'comics',component:EventsComponent},
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
