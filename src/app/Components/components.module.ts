import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeaderInfoComponentComponent } from './header-info-component/header-info-component.component';
import { AnimationBackgroundComponent } from './animation-background/animation-background.component';
import { CarouselTechnologiesComponent } from './carousel-technologies/carousel-technologies.component';

@NgModule({
  declarations: [
    AboutComponent,
    ServiciosComponent,
    HeaderInfoComponentComponent,
    AnimationBackgroundComponent,
    CarouselTechnologiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ServiciosComponent,
    HeaderInfoComponentComponent,
    AnimationBackgroundComponent,
    CarouselTechnologiesComponent
  ]
})
export class ComponentsModule { }
