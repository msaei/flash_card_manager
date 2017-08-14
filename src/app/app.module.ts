import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
apiKey: "AIzaSyCtcxcrTXFQ28PYj25XURn_qVz26FyAPVU",
    authDomain: "flashcard-manager.firebaseapp.com",
    databaseURL: "https://flashcard-manager.firebaseio.com",
    projectId: "flashcard-manager",
    storageBucket: "",
    messagingSenderId: "702143581804"
    };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
