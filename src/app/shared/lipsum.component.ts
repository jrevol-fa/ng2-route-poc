import { Component } from '@angular/core';
import { Lipsum } from '../lispum.service';

@Component({
    selector: 'app-lipsum',
    template: `{{lipsum.text}}`
})
export class LipsumComponent {
    constructor(public lipsum: Lipsum) {
    }
}