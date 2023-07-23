import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/Services/face-snaps.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule ici

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  butonSnapValue!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private router: Router) {}

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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
