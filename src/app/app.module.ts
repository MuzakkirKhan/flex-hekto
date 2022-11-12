import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { SliderComponent } from './components/pages/slider/slider.component';
import { FeaturedComponent } from './components/pages/featured/featured.component';
import { LatestComponent } from './components/pages/latest/latest.component';
import { TrendingComponent } from './components/pages/trending/trending.component';
import { DiscountComponent } from './components/pages/discount/discount.component';
import { TopCategoriesComponent } from './components/pages/top-categories/top-categories.component';
import { SubscribeComponent } from './components/pages/subscribe/subscribe.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { WeOfferComponent } from './components/pages/we-offer/we-offer.component';
import { UniqueComponent } from './components/pages/unique/unique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SliderComponent,
    FeaturedComponent,
    LatestComponent,
    TrendingComponent,
    DiscountComponent,
    TopCategoriesComponent,
    SubscribeComponent,
    BlogComponent,
    WeOfferComponent,
    UniqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
