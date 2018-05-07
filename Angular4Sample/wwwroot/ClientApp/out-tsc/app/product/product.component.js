"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.showToggle = false;
        this.setWidth = 50;
        this.setMargin = 2;
        this._listFilter = "";
        this.products = [];
    }
    Object.defineProperty(ProductComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.toggleImage = function () {
        this.showToggle = !this.showToggle;
    };
    ProductComponent.prototype.performFilter = function (value) {
        return this.products.filter(function (p) { return p.productName.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1; });
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var errorMessage;
        this._productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.filteredProducts = _this.products;
        }, function (err) { return errorMessage = err; });
    };
    ProductComponent.prototype.onRatingClicked = function (starOutput) {
        this.pageTitle = 'Product List ' + starOutput.message + ' : ' + starOutput.rating;
    };
    ProductComponent = __decorate([
        core_1.Component({
            //selector: 'pm-product',
            templateUrl: './product.component.html'
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map