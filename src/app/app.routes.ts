import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent  } from './components/about/about.component';
import { ArtworkComponent  } from './components/artwork/artwork.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArtworksComponent  } from './components/artworks/artworks.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artworks', component: ArtworksComponent },
    { path: 'artwork/:id', component: ArtworkComponent },
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
