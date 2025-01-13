import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-2796e","appId":"1:1095321081098:web:996eb1da3c94af5dc0d6f3","storageBucket":"friendlychat-2796e.firebasestorage.app","apiKey":"AIzaSyDa8M7OOsBSBcfpgWqN3HzkRKVRvSd4KPk","authDomain":"friendlychat-2796e.firebaseapp.com","messagingSenderId":"1095321081098"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
