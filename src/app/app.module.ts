// mudues


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//  components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GenerationCardComponent } from './generation-card/generation-card.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { GenerationCardListViewComponent } from './generation-card-list-view/generation-card-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    GenerationCardComponent,
    ImageCarouselComponent,
    GenerationCardListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
