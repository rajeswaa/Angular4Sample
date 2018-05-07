import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";
import { IStarOutput } from "./star-output";

@Component({
    "selector": "pm-star",
    "templateUrl": "./star.component.html",
    "styleUrls":["./star.component.css"]
        
})
export class StarComponent {
    starWidth: number;
    actualStarWidth: number = 84;
    starOutput: IStarOutput;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<IStarOutput> = new EventEmitter<IStarOutput>();

    OnClick(): void {
        this.starOutput = {
            message: `the Rating ${this.rating} is clicked`,
            rating: this.rating
        };
        
        this.ratingClicked.emit(this.starOutput);
        //console.log(`Rating ${this.rating} clicked`);
    }
    ngOnChanges(): void {
        this.starWidth = this.actualStarWidth * this.rating / 5;
    }
}