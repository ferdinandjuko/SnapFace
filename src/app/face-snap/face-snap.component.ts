import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from 'src/Services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  butonSnapValue!: string;

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.butonSnapValue = "oh snap";
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
