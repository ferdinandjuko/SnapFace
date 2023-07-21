import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from 'src/Services/face-snaps.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';
import { concat } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent, HttpClientModule],
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>; // type observable, emettre un tableau de FaceSnap

  private destroy$!: Subject<boolean>;


  constructor(private faceSnapService:FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();
    
    interval(1000).pipe(
      take(3), // Limiter à 3 émissions
      tap(console.log),
    )

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
