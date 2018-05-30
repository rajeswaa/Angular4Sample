import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { IStarOutput } from '../Shared/star-output';
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-product',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit{
   
    pageTitle: string = 'Product List';
    showToggle: boolean = false;
    setWidth: number = 50;
    setMargin: number = 2;
    _listFilter: string = "";
    filteredProducts: IProduct[];

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [];

    constructor(private _productService: ProductService) {
        
    }

    toggleImage(): void {
        this.showToggle = !this.showToggle;
    }

    performFilter(value: string): IProduct[] {
        return this.products.filter((p: IProduct) => p.productName.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
    }

    ngOnInit(): void {
        let errorMessage: string;
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            err => errorMessage = <any>err
        );
    }

    onRatingClicked(starOutput: IStarOutput): void {
        this.pageTitle = 'Product List ' + starOutput.message + ' : ' + starOutput.rating;
    }

}