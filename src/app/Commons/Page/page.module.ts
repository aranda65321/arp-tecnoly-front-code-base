import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SpinnerLoadComponent } from './spinner-load/spinner-load.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SpinnerLoadComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule

  ],
  exports: [
    ContentComponent
  ]
})
export class PageModule { }
