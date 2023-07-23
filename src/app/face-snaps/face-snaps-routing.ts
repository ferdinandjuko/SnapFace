import { Routes } from "@angular/router";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";

export const routes: Routes = [
    { path: 'create', component: NewFaceSnapComponent },
    { 
        path: ':id',
        loadComponent: () => import("./components/single-face-snap/single-face-snap.component").then((m)=>m.SingleFaceSnapComponent)
    },
    { path: '', pathMatch: "full", component: FaceSnapListComponent }
];
