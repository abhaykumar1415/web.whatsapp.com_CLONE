import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ProfileComponent } from './profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdGridListModule} from '@angular/material';
import 'hammerjs';

export const firebaseConfig = {
  apiKey: "AIzaSyDuQKnbM5CE_NkIbjcM9i7H64TZPqWylhQ",
  authDomain: "web-whatsapp-d870a.firebaseapp.com",
  databaseURL: "https://web-whatsapp-d870a.firebaseio.com",
  projectId: "web-whatsapp-d870a",
  storageBucket: "",
  messagingSenderId: "754600677665"
};
@NgModule({
  declarations: [
    AppComponent,
    GoogleLoginComponent,
    WrapperComponent,
    ChatListComponent,
    ChatWindowComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    MdButtonModule, MdCheckboxModule, MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
