import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ConvertToSpacePipe } from './Shared/convert-to-space.pipe';
import { StarComponent } from './Shared/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './Shared/page-not-found.component';
import { ProductModule } from './product/product.module';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
          { path: 'home', component: WelcomeComponent },
          { path: '', redirectTo: '/home', pathMatch:'full' },
          { path: '**', component: PageNotFoundComponent }          
      ], { useHash: true }),
      ProductModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        PageNotFoundComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
