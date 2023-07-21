import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from 'src/Services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  butonSnapValue!: string;
  ;
  constructor(private faceSnapService: FaceSnapsService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.butonSnapValue = "oh snap";
    const faceSnapId = +this.route.snapshot.params['id'];
    /*this.faceSnapService.getFaceSnapById(faceSnapId).then((faceSnap: FaceSnap) => {
      this.faceSnap = faceSnap;
    });*/
    // this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onClickSnapp(faceSnapId: number) {
    if(this.butonSnapValue == "oh snap") {
      /*this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').then((faceSnap: FaceSnap) => {
        this.faceSnap = faceSnap;
      });*/
      this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
          this.butonSnapValue = "yeah, snaped";
        })
      ).subscribe();
    } else {
      /*this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').then((faceSnap: FaceSnap) => {
        this.faceSnap = faceSnap;
      });*/
      this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
          this.butonSnapValue = "oh snap";
        })
      ).subscribe();
    }
  }
}
