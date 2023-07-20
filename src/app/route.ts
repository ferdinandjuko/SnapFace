import { Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routerConfig: Routes = [
    {path: 'facesnaps', component: FaceSnapListComponent},
    { path: '', component: LandingPageComponent }
];

export default routerConfig;