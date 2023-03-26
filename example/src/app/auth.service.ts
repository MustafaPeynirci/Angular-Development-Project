export class AuthService {

    loggedIn = false

    isAuthenticated() {
        let timeout = 700
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve(this.loggedIn)
            }, timeout);
        })

        return promise
    }
    login() {
        this.loggedIn = true
    }
    logout() {
        this.loggedIn = false
    }
}