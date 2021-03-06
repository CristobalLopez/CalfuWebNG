import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APPROUTING } from './app.routes';

// Servicios
import { ArtworksService } from './servicios/artworks.service';

// Componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArtworkComponent } from './components/artwork/artwork.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtworksComponent } from './components/artworks/artworks.component';
import { LoginComponent } from './components/login/login.component';
import { ConfigComponent } from './components/config/config.component';
import { ResetComponent } from './components/reset/reset.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ArtworkComponent,
    NavbarComponent,
    ArtworksComponent,
    LoginComponent,
    ConfigComponent,
    ResetComponent,
    NewUserComponent    
  ],
  imports: [
    BrowserModule,
    APPROUTING, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArtworksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
