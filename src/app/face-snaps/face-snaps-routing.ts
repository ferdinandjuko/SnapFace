import { Routes } from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { AuthGuard } from "../core/guard/auth.guard";

export const routes: Routes = [
    { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard] },
    { 
        path: ':id',
        loadComponent: () => import("./components/single-face-snap/single-face-snap.component").then((m)=>m.SingleFaceSnapComponent),
        canActivate: [AuthGuard]
    },
    { path: '', pathMatch: "full", component: FaceSnapListComponent, canActivate: [AuthGuard] }
];
