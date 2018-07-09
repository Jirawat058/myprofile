import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styleUrls: ['./css/style.css', './css/bootstrap.min.css', './profile.css']

  // templateUrl: ('src/profile/index.html')


})
export class Profile {
  image = 'assets/bgcover.jpg';
  filedata: any;

  // Cover
  picCover: any;
  message: any;

  // About
  name: any;
  nickName: any;
  age: any;
  major: any;
  years: any;
  faculty: any;
  imgMe: any;

  // Experience
  yearEx1: any;
  institution1: any;
  description1: any;

  yearEx2: any;
  institution2: any;
  description2: any;

  yearEx3: any;
  institution3: any;
  description3: any;

  yearEx4: any;
  institution4: any;
  description4: any;
  // Education
  yearEd1: any;
  descriptionEd1: any;
  education1: any;

  yearEd2: any;
  descriptionEd2: any;
  education2: any;

  yearEd3: any;
  descriptionEd3: any;
  education3: any;

  // skill
  skill1: any;
  skill2: any;
  skill3: any;
  skill4: any;
  skill5: any;
  skill6: any;
  skill7: any;

  // Activity
  picAct1: any;
  descriptionAct1: any;

  picAct2: any;
  descriptionAct2: any;

  picAct3: any;
  descriptionAct3: any;

  picAct4: any;
  descriptionAct4: any;

  picAct5: any;
  descriptionAct5: any;

  picAct6: any;
  descriptionAct6: any;

  // Contact
  address: any;
  phone: any;
  email: any;


  constructor(public router: Router, public http: Http, private db: AngularFireDatabase) {

    let checkSession = localStorage.getItem('id_token');
    console.log('Showsession' + checkSession);

    if (checkSession === null) {
      this.router.navigate(['login']);
    }

    this.filedata = 'profile/' + checkSession;
    console.log(this.filedata);

    let vm = this;
    let ref = firebase.database().ref(this.filedata);

    // Cover
     ref.orderByChild('picCover').on('child_added', function (data) {
      vm.picCover = data.val().picCover;
      vm.message = data.val().message;
    });



    // About
    ref.orderByChild('name').on('child_added', function (data) {
      console.log(data.val().name);
      console.log(data.val().nickName);
      console.log(data.val().age);
      vm.name = data.val().name;
      vm.nickName = data.val().nickName;
      vm.age = data.val().age;
      vm.major = data.val().major;
      vm.years = data.val().years;
      vm.faculty = data.val().faculty;
      vm.imgMe = data.val().imgMe;
    });

     // Experience
    ref.orderByChild('yearEx1').on('child_added', function (data) {
      vm.yearEx1 = data.val().yearEx1;
      vm.institution1 = data.val().institution1;
      vm.description1 = data.val().descriptionEx1;

      vm.yearEx2 = data.val().yearEx2;
      vm.institution2 = data.val().institution2;
      vm.description2 = data.val().descriptionEx2;

      vm.yearEx3 = data.val().yearEx3;
      vm.institution3 = data.val().institution3;
      vm.description3 = data.val().descriptionEx3;

      vm.yearEx4 = data.val().yearEx4;
      vm.institution4 = data.val().institution4;
      vm.description4 = data.val().descriptionEx4;

      console.log(data.val().yearEx1);
      console.log(data.val().institution1);
    });

    // Education
    ref.orderByChild('yearEd1').on('child_added', function (data) {
      vm.yearEd1 = data.val().yearEd1;
      vm.education1 = data.val().education1;
      vm.descriptionEd1 = data.val().descriptionEd1;

      vm.yearEd2 = data.val().yearEd2;
      vm.education2 = data.val().education2;
      vm.descriptionEd2 = data.val().descriptionEd2;

      vm.yearEd3 = data.val().yearEd3;
      vm.education3 = data.val().education3;
      vm.descriptionEd3 = data.val().descriptionEd3;
    });

    // SKILL
    ref.orderByChild('skill1').on('child_added', function (data) {
      vm.skill1 = data.val().skill1;
      vm.skill2 = data.val().skill2;
      vm.skill3 = data.val().skill3;
      vm.skill4 = data.val().skill4;
      vm.skill5 = data.val().skill5;
      vm.skill6 = data.val().skill6;
      vm.skill7 = data.val().skill7;
    });

    // Activity
    ref.orderByChild('picAct1').on('child_added', function (data) {
      vm.picAct1 = data.val().picAct1;
      vm.descriptionAct1 = data.val().descriptionAct1;

      vm.picAct2 = data.val().picAct2;
      vm.descriptionAct2 = data.val().descriptionAct2;

      vm.picAct3 = data.val().picAct3;
      vm.descriptionAct3 = data.val().descriptionAct3;

      vm.picAct4 = data.val().picAct4;
      vm.descriptionAct4 = data.val().descriptionAct4;

      vm.picAct5 = data.val().picAct5;
      vm.descriptionAct5 = data.val().descriptionAct5;

      vm.picAct6 = data.val().picAct6;
      vm.descriptionAct6 = data.val().descriptionAct6;

    });
    // Contact
    ref.orderByChild('address').on('child_added', function (data) {
      vm.address = data.val().address;
      vm.phone = data.val().phone;
      vm.email = data.val().email;
    });
  }

  logout() {
    localStorage.removeItem('id_token');
        console.log('logout');
        window.location.reload();
  }




  // tslint:disable-next-line:member-ordering
}
