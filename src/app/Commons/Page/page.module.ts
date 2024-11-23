import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/Components/components.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BodyComponent } from './body/body.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerLoadComponent } from './spinner-load/spinner-load.component';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SpinnerLoadComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    ContentComponent,
  ]
})
export class PageModule { }
