import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        CommonModule,
        StarComponent
    ]
})
export class SharedModule { }
