import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMultiColor]'
})
export class MultiColorDirective { 

  colorsArray: string[] = ["#9AD2CB", "#D7EBBA", "#FEFFBE", "#EBD494", "#472836"]; 

  colorInterval: any;

  @HostListener('mouseover') 
  onMouseOver(){ 
    let colorIndex = 0; 
    
    this.colorInterval = setInterval(() =>{  
      this.el.nativeElement.style.backgroundColor = this.colorsArray[colorIndex];
      colorIndex ++; 
      if (colorIndex >= this.colorsArray.length) {
        colorIndex = 0;
      }
    }, 100)
  } 

  @HostListener('mouseout') 
  onMouseOut(){ 
    clearInterval(this.colorInterval)
    this.el.nativeElement.style.backgroundColor = 'crimson';
  }

  constructor(private el: ElementRef) { 
    
    el.nativeElement.style.borderStyle = 'none'; 
    el.nativeElement.style.padding = '8px'; 
    el.nativeElement.style.borderRadius = '4px'; 
    el.nativeElement.style.color = 'white'; 
    el.nativeElement.style.fontWeight = '';


  }

}
