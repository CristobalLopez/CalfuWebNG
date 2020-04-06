import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent  } from './components/about/about.component';
import { ArtworkComponent  } from './components/artwork/artwork.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArtworksComponent  } from './components/artworks/artworks.component';
import { ConfigComponent } from './components/config/config.component';
import { LoginComponent } from './components/login/login.component';
import { ResetComponent} from './components/reset/reset.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artworks', component: ArtworksComponent },
    { path: 'artwork/:id', component: ArtworkComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'login', component: LoginComponent},
    { path: 'config', component: ConfigComponent},
    { path: 'reset', component: ResetComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
