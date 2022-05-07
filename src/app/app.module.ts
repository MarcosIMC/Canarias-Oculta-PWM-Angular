import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from "@angular/router";
import { CarouselArticleComponent } from './components/carousel/carousel-article/carousel-article.component';
import { IslandComponent } from './pages/island/island.component';
import { ImgSectionComponent } from './pages/island/img-section/img-section.component';
import { ShortArticleComponent } from './pages/island/short-article/short-article.component';
import { VerticalNavBarComponent } from './components/vertical-nav-bar/vertical-nav-bar.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchMobileComponent } from './components/search-mobile/search-mobile.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import { ArticleListComponent } from './components/article-list/article-list.component';
import { UserComponent } from './pages/user/user.component';
import { UserCardComponent } from './pages/user/user-card/user-card.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ArticleComponent,
    CarouselComponent,
    HomeComponent,
    CarouselArticleComponent,
    IslandComponent,
    ImgSectionComponent,
    ShortArticleComponent,
    VerticalNavBarComponent,
    SearchPageComponent,
    SearchMobileComponent,
    ArticlePageComponent,
    ArticleListComponent,
    UserComponent,
    UserCardComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'island', component: IslandComponent},
      {path: 'searchPage', component: SearchPageComponent},
      {path: 'profile', component: UserComponent},
      {path: 'editProfile', component: EditProfileComponent},
      {path: 'articles/:articleName', component: ArticlePageComponent},
      {path: 'island/:islandName', component: IslandComponent},
      {path: '**', pathMatch: 'full', component: HomeComponent}
    ], {onSameUrlNavigation: 'reload'}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
