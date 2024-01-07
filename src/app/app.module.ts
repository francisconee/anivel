import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { FormCotizarComponent } from './components/form-cotizar/form-cotizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListWorksComponent } from './components/list-works/list-works.component';
import { CardWorkComponent } from './components/card-work/card-work.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ValoresComponent } from './components/valores/valores.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminModule } from './pages/admin/admin.module';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MenuComponent,
    ContactComponent,
    HeroComponent,
    FormCotizarComponent,
    ListWorksComponent,
    CardWorkComponent,
    AboutusComponent,
    ValoresComponent,
    FooterComponent,
    AdminComponent,
    WorkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    provideFirebaseApp(() => initializeApp({
      "projectId": "pinta-gonzalo",
      "appId": "1:654289781621:web:bebc6cddce6e6dd1dc493c",
      "storageBucket": "pinta-gonzalo.appspot.com",
      "apiKey": "AIzaSyAvCUwO3oqiauHRY-0y99E0u7uT9o8q08c",
      "authDomain": "pinta-gonzalo.firebaseapp.com",
      "messagingSenderId": "654289781621"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
