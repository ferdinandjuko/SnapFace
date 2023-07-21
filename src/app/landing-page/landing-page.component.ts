import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsService } from 'src/Services/face-snaps.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;
  applyForm = new FormGroup({
    email: new FormControl('')
  })
  constructor(private router: Router,
    private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    
  }
 
  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }
  submitApplication(): void {
    this.faceSnapsService.submitApplication(
      this.applyForm.value.email ?? ''
    )
  }

  onSubmitForm(): void {
    console.log(this.userEmail);
  }
}
