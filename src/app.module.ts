import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './environments/firebase.config';



import { AppComponent } from './app/app.component';
import { Profile } from './profile';
import { Login } from './login';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { Register } from './register';
import { Admin } from './admin';
import { UserlistComponent } from './app/userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent, Profile, Login, Register, Admin, UserlistComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
