import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
    templateUrl: './product-detail.component.html',
    styles: []
})
export class ProductDetailComponent implements OnInit {
    imageWidth: number = 150;
    productId: number;
    product: IProduct;
    products: IProduct[];

    constructor(private _activeRoute: ActivatedRoute,
        private _service: ProductService,
        private _route: Router) { }

    ngOnInit() {
        this._activeRoute.paramMap.subscribe(params => {
            console.log(params.get('id'));
            this.productId = parseInt(params.get('id'));

            this._service.getProducts().subscribe(products => {
                this.product = products.filter(
                    prod => prod.productId === this.productId)[0];
            });
        });
    }

    onBack() {
        this._route.navigate(['/products']); 
    }
}
