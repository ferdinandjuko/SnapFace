import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from 'src/Services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  butonSnapValue!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.butonSnapValue = "oh snap";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onClickSnapp() {
    if(this.butonSnapValue == "oh snap") {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.butonSnapValue = "yeah, snaped";

    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.butonSnapValue = "oh snap";
    }
  }
}
