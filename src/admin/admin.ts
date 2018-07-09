import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
    selector: 'admin',
    templateUrl: './admin.html',
    styleUrls: ['./admin.css', './css/bootstrap.min.css']
})
export class Admin {

    constructor(public router: Router, public http: Http, private db: AngularFireDatabase) {
       
        let checkSession = localStorage.getItem('id_token');
        console.log('Showsession' + checkSession);
        if (checkSession === null) {
            this.router.navigate(['login']);
        }

    }

    logout() {
        localStorage.removeItem('id_token');
        console.log('logout');
    }
}

