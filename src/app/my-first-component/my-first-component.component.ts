import { Component, EventEmitter,Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from '../second-component/second-component.component';

@Component({
  selector: 'app-my-first-component',
  standalone: true,
  imports: [CommonModule, SecondComponentComponent],
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent {
  @Input({
    alias: 'inputval',
    required: false,
  })
  text:string = 'Angular'

  @Output() 
  onButtonCLick: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  public TextChange(e: any): void {
    console.log(e.target.value)
  }
  public HelloFirstComponent(): void {
    console.log("I'm your first component")
  }
}
