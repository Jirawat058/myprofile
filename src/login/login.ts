import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

let provider = new firebase.auth.GoogleAuthProvider();

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css', './css/bootstrap.min.css']
})
export class Login {

  username: string;
  user: string;
  pass: string;
  typeuser: string;
  key: any;
  constructor(public router: Router, public http: Http, private db: AngularFireDatabase) {
    localStorage.removeItem('id_token');
    console.log('logout');

    let checkSession = localStorage.getItem('id_token');
    console.log('Showsession' + checkSession);
  }

  // tslint:disable-next-line:member-ordering
  alert = ' ';

  login(_event: any, username: any, password: any) {
    let ref = firebase.database().ref('user/');
    let vm = this;
    ref.orderByChild('username').equalTo(username).on('child_added', function (data) {
      console.log('key' + data.key);
      console.log(data.val().password);
      console.log(data.val().username);
      console.log(password);
      console.log(username);
      //   let body = JSON.stringify(data.key);
      //   localStorage.setItem('id_token', data.key);
      vm.key = data.key;
      vm.user = data.val().username;
      vm.pass = data.val().password;
      vm.typeuser = data.val().typeuser;
      console.log(vm.user);
      vm.check(username, password);

    });
    vm.userlert(username, password);

  }

  check(username: string, password: string) {
    if (username !== '' && password !== '') {

      if (username === this.user && password === this.pass) {

        if (this.typeuser === 'admin') {
          localStorage.setItem('id_token', this.key);
          this.router.navigate(['admin']);
        } else {
          console.log('Hello');
          localStorage.setItem('id_token', this.key);
          // console.log('idtoken = ' + body);
          this.router.navigate(['profile']);
        
        }


      } else {

        console.log('passlogin ' + password);
        console.log('userlogin ' + username);
        console.log('userDb ' + this.user);
        console.log('passDB ' + this.pass);
        console.log('password' + password);
        this.alert = 'username or password wrong';
      }
    } else {
      console.log(username);
      this.alert = 'username and password require';
      console.log(alert);
    }
  }

  userlert(username: string, password: string) {
    if (username === '' || password === '') {
      this.alert = 'username and password require';

    }
  }



}
