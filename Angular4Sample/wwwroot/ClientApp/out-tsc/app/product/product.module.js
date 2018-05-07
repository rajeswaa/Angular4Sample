"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_component_1 = require("./product.component");
var product_detail_component_1 = require("../product-detail/product-detail.component");
var convert_to_space_pipe_1 = require("../Shared/convert-to-space.pipe");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var shared_module_1 = require("../Shared/shared.module");
var forms_1 = require("@angular/forms");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'products', component: product_component_1.ProductComponent },
                    { path: 'products/:id', component: product_detail_component_1.ProductDetailComponent }
                ]),
                shared_module_1.SharedModule,
                forms_1.FormsModule
            ],
            declarations: [
                product_component_1.ProductComponent,
                convert_to_space_pipe_1.ConvertToSpacePipe,
                product_detail_component_1.ProductDetailComponent
            ],
            providers: [
                product_service_1.ProductService
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map