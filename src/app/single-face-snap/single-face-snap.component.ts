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

  constructor(private faceSnapService: FaceSnapsService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.butonSnapValue = "oh snap";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onClickSnapp(faceSnapId: number) {
    if(this.butonSnapValue == "oh snap") {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.butonSnapValue = "yeah, snaped")
      ); // le pipe  async  du template souscrit pour nous !

    } else {

      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.butonSnapValue = "oh snap")
      ); // le pipe  async  du template souscrit pour nous !
    }
  }
}
