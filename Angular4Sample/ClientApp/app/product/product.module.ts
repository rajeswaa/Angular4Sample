import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ConvertToSpacePipe } from '../Shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductComponent },
            { path: 'products/:id', component: ProductDetailComponent }               
        ]),
        SharedModule,
        FormsModule
  ],
  declarations: [
      ProductComponent,
      ConvertToSpacePipe,
      ProductDetailComponent
    ],
    providers: [
        ProductService
      ]
})
export class ProductModule { }