import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShortArticleComponent } from './components/short-article/short-article.component';
import { ImgSectionComponentComponent } from './components/img-section-component/img-section-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ArticleComponent,
    UserProfileComponent,
    CarouselComponent,
    ShortArticleComponent,
    ImgSectionComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
