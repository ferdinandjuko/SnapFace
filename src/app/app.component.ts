import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { UserServices } from '../Services/userServices';
import { BlinkDirective } from './blink.directive';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Observable, interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent, BlinkDirective,
    FaceSnapListComponent, HeaderComponent, RouterModule,
    LandingPageComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
      provide: UserServices,
      useClass: UserServices
  }]
  // ViewEncapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  userName!: string;
  interval$!: Observable<string>;

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  constructor(
    @Inject(UserServices) public UserService: UserServices
  ) {}

  public ngOnInit(): void {
    
    this.userName = "Ferdinand";
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      exhaustMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }
}