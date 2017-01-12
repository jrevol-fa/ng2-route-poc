import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: [ './iframe.component.css' ]
})
export class IframeComponent implements OnInit {

    @Input()
    public source: string;

    constructor() {
    }

    ngOnInit() {
    }

}
