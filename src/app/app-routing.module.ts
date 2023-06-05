import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Commons/Page/body/body.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '', component: BodyComponent,
    children: [
    ]
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    CommonModule,
    BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
