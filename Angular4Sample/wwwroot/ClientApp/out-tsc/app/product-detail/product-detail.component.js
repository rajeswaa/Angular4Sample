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
var router_1 = require("@angular/router");
var product_service_1 = require("../product/product.service");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(_activeRoute, _service, _route) {
        this._activeRoute = _activeRoute;
        this._service = _service;
        this._route = _route;
        this.imageWidth = 150;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activeRoute.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            _this.productId = parseInt(params.get('id'));
            _this._service.getProducts().subscribe(function (products) {
                _this.product = products.filter(function (prod) { return prod.productId === _this.productId; })[0];
            });
        });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._route.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './product-detail.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            product_service_1.ProductService,
            router_1.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map