import { Injectable } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [];
  url: string = 'http://localhost:3000/faceSnaps';
  constructor() { }

  /*faceSnaps: FaceSnap[] = [
      {
        id: 1,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 120,
        location: 'Paris'
      },
      {
        id: 2,
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 69,
        location: 'la montagne'
      },
      {
        id: 3,
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 84
      }
    ];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
    }*/
    
    async getAllFaceSnaps(): Promise<FaceSnap[]> {
      const response = await fetch(this.url);
      return await response.json() ?? [];
    }

    /*getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if(!faceSnap) {
        throw new Error('FaceSnap not found');
      } else {
        return faceSnap;
      }
    } */

    async getFaceSnapById(faceSnapId: number): Promise<FaceSnap> {
      const response = await fetch(`${this.url}/${faceSnapId}`);
      return await response.json();
    }

    /*snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === "snap" ? faceSnap.snaps++: faceSnap.snaps--;
    }*/

    async snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Promise<FaceSnap> {
      const faceSnap = await this.getFaceSnapById(faceSnapId);
      const newFaceSnap = {
        ...faceSnap,
        snaps: snapType === 'snap' ? faceSnap.snaps + 1 : faceSnap.snaps - 1
      };
      await fetch(`${this.url}/${faceSnapId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFaceSnap)
      });
      return newFaceSnap;
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
