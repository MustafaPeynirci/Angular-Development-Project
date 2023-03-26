import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate() {
        return this.authService.isAuthenticated()
            .then((authenticated: boolean) => {
                if (authenticated) {
                    return true
                }
                else {
                    this.router.navigate(["/"])
                    return false
                }
            })
    }
}