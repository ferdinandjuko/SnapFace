import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';
import { UserServices } from 'src/Services/userServices';
import { BlinkDirective } from './blink.directive';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MyFirstComponentComponent, SecondComponentComponent,
    FaceSnapComponent, BlinkDirective, FaceSnapListComponent, HeaderComponent,
    RouterModule, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: UserServices,
      useClass: UserServices
  }
]
  // ViewEncapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'Angular Production';
  counter: number =  0;
  faceSnaps!: FaceSnap[];
  userName: string = " ";

  constructor(
    @Inject(UserServices) public UserService: UserServices
  ) {
      this.userName = "Ferdinand";
  }
  
  public testClick(): void {
    console.log("click")
  }

  // public textChange(e: any): void {
  //   console.log(e.target.value)
  // }



  ngOnInit() {
      
  }
}