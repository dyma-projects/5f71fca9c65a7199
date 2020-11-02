import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[textColor]' })
export class TextColorDirective {

  constructor() {}

  @HostBinding('style.color') couleur: string;
  
  @HostListener('window:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
        case 'ArrowUp': this.couleur='blue'; break;
        case 'ArrowDown': this.couleur='lime'; break;
        case 'ArrowRight': this.couleur='orange'; break;
        case 'ArrowLeft': this.couleur='pink'; break;
    }
  }

}
