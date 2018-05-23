import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-brain-display',
    templateUrl: './brain-display.component.html',
    styleUrls: ['./brain-display.component.css']
})
export class BrainDisplayComponent implements OnInit {
    cal;
    constructor() { }

    ngOnInit() {
    }



    buildCalendar(year) {
        const date = new Date(year, 0, 1);
        const end = new Date(date);
        end.setFullYear(end.getFullYear() + 1);
        const array = [];
        while (date < end) {
            console.log(date);
            array.push(date);
            date.setDate(date.getDate() + 1);
        }

        this.cal = array;
    }

}
