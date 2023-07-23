import { Routes } from "@angular/router";
// import { FaceSnapListComponent } from "./face-snaps/components/face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";
import { NewFaceSnapComponent } from "./face-snaps/components/new-face-snap/new-face-snap.component";

const routerConfig: Routes = [
    {
        path: 'facesnaps',
        loadChildren: () => import("./face-snaps/face-snaps-routing").then((m)=> m.routes)
    },
    // { path: 'create', component: NewFaceSnapComponent },
    { path: '', component: LandingPageComponent }
];

export default routerConfig;