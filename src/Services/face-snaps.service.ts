import { Injectable } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { Observable, switchMap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [];

  constructor(private http: HttpClient) { }

    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
      return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
          ...faceSnap,
          snap: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap
        ))
      );
    }

    submitApplication(email: string): void {
      console.log('email',email);
    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void {
      /*const newFaceSnap: FaceSnap = {
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
      };
      this.faceSnaps.push(newFaceSnap);*/
    }
}
