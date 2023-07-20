import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from 'src/Services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule, FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapService:FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
  }
}
