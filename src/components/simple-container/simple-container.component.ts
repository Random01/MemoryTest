import { Component } from '@angular/core';
import { Pair } from 'src/models/pair.mode';
import { SimplePair } from 'src/models/simple-pair.model';
import { SimpleSimplePair } from 'src/models/simple-simple-pair.model';
import { OptimizedPair } from 'src/models/optimized-pair.model';

@Component({
    selector: 'app-simple-container',
    templateUrl: './simple-container.component.html'
})
export class SimpleContainerComponent {

    public items0: any[] = [];
    public items1: any[] = [];
    public items2: any[] = [];
    public items3: any[] = [];
    public items4: any[] = [];

    constructor() {
        for (let i = 0; i < 500000; i++) {
            const x = i * 10000;
            const y = i * 20000;

            this.items0.push(new Pair(x, y));
            this.items1.push(new SimplePair(x, y));
            this.items2.push(new SimpleSimplePair(x, y));
            this.items3.push({ x, y });
            this.items4.push(new OptimizedPair(x, y));
        }
    }
}
