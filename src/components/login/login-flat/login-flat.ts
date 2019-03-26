import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Users } from '../../../models/users.interface';
import { FirebaseServiceProvider } from '../../../providers/firebase-service';


@IonicPage()
@Component({
    selector: 'login-flat',
    templateUrl: 'login-flat.html'
})
export class LoginFlat {
    @Input() data: any;
    @Input() events: any;

    public username: string;
    public password: string;
    errorMessage: any;
    emailVerification;
    points;
    arrayUsers;
    userObjects;
    loggedUser;
    localStorageItem

    public isUsernameValid: boolean;
    public isPasswordValid: boolean;
    user: Users = {
        username: '',
        password: '',
        email: '',
        points: 0,
        image: '',
        status: '',
        online: false
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
    }

    onEvent = (event: string): void => {
        if (event == "onLogin" && !this.validate()) {
            return;
        }
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'password': this.password
            });
        }
    }

    login(user: Users) {
        console.log(user);
        this.errorMessage = " ";
        this.firebaseService.login(user).catch(error => {
            this.errorMessage = error.message
        }).then(res => {
            this.emailVerification = JSON.parse(localStorage.getItem('emailVerification'));
            if (this.errorMessage == null || this.errorMessage == " ") {
                console.log(this.emailVerification);
                setTimeout(() => {
                    console.log(this.emailVerification);
                    if (this.emailVerification == true) {
                        console.log(this.firebaseService.usersObject);
                        var uid = this.firebaseService.usersObject.$key;
                        this.localStorageItem = localStorage.setItem('userId', uid);
                        this.firebaseService.usersObject.points += 1;
                        this.firebaseService.updateUser2(this.firebaseService.usersObject);
                        this.navCtrl.push("FirstpostPage");
                    }
                    else if (this.emailVerification == false) {
                        this.errorMessage = "Please verify email before permitted to login, if verified click login button again";
                    }
                }, 1000);
            }
        })
    }

    validate(): boolean {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
            console.log("please add data");
        }

        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        return this.isPasswordValid && this.isUsernameValid;
    }

    navLogin() {
        this.navCtrl.push('RegisterPage');
    }

    navReset() {
        this.navCtrl.push('ResetpasswordPage');
    }
}
