import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseDatabase } from 'angularfire2/database';
import { FirebaseUrl } from 'angularfire2';
import { database } from 'firebase';






@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css', './css/bootstrap.min.css']

})
export class Register {
  alert: any;
  result: any;
  constructor(public router: Router, public http: Http, db: AngularFireDatabase) {
  }


  register($even: any, name: any, surname: any, age: number, username: any, password: any) {



    if (name !== '' && surname !== '' && age !== null && username !== '' && password !== '') {
        console.log(name);
        console.log(surname);
        console.log(age);
        let userAdd = firebase.database().ref('user/');
        userAdd.push({
          name: name,
          surname: surname,
          age: age,
          username: username,
          password: password,
          typeuser: 'user'
        });
        this.alert = 'Register success';
        this.result = true;
    } else {
      this.alert = 'Please complete all required fields';
      this.result = false;
    }


  }

  ok() {
    if (this.result) {

      this.router.navigate(['login']);
    };
  }

}
