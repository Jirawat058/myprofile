import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Http, } from '@angular/http';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  name: any;
  key: any;
  keyDelete: any;
  constructor(public router: Router, public http: Http, private db: AngularFireDatabase) {
      this.username();
  }



  username() {
      let name: any = [];
      let key: any = [];
      let vm = this;
      let ref = firebase.database().ref('user/');
      ref.on('child_added', function (data) {
          console.log(data.val().name);
          console.log(data.key);

          console.log(name);
          console.log(data.val().typeuser);
          let type = data.val().typeuser;

          if (type !== 'admin') {
              name.push(data.val().name + ' ' + data.val().surname);
              key.push(data.key);
              vm.name = name;
              vm.key = key;
          }


          //    document.getElementById('test').innerHTML = name;
      }, function (error: any) {
          console.log('Error: ' + error.code);
      });
  }
  linkProfile(keypage: any) {
      localStorage.setItem('id_token', keypage);
      console.log(keypage);
      console.log('1');
      this.router.navigate(['profile']);
  }



  getKey(keyGet: any) {
      this.keyDelete = keyGet;
      console.log(keyGet);
  }

  deleteUser(keypage: any) {

      let filedata = 'user/' + this.keyDelete;
      console.log(filedata);
      let ref = firebase.database().ref(filedata);
      console.log(this.keyDelete);

      ref.remove();

      console.log('delete success');
      this.username();
    //  window.location.reload();
  }

  ngOnInit() {

  }

}
