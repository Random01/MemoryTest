import { Component } from '@angular/core';
import { Pair } from 'src/models/pair.mode';
import { SimplePair } from 'src/models/simple-pair.model';
import { SimpleSimplePair } from 'src/models/simple-simple-pair.model';

@Component({
    selector: 'app-simple-container',
    templateUrl: './simple-container.component.html'
})
export class SimpleContainerComponent {

    public items0: any[] = [];
    public items1: any[] = [];
    public items2: any[] = [];
    public items3: any[] = [];

    constructor() {
        for (let i = 0; i < 1000000; i++) {
            this.items0.push(new Pair(i * 10000, i * 20000));
            this.items1.push(new SimplePair(i * 10000, i * 20000));
            this.items2.push(new SimpleSimplePair(i * 10000, i * 20000));
            this.items3.push({ x: i * 10000, y: i * 20000 });
        }
    }
}
