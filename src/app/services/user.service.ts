import { Injectable, NgZone } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, User, authState } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userData: any

    constructor(private auth: Auth, private router: Router, private ngZone: NgZone) {
        authState(this.auth).subscribe((user: User | null) => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.setItem('user', 'null');
            }
        });
    }

    login({ email, password }: any) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    observerUserState() {
        this.auth.onAuthStateChanged((user) => {
           user && this.ngZone.run(() => this.router.navigate(['admin']))
        });
    }

    loginWithGoogle() {
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }

    logout() {
        return this.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        })
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null;
    }
}
