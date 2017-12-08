export class AuthService {
  isLogIn = false;

  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve(this.isLogIn);
      }, 1000);
    });
  }

  logIn() {
    this.isLogIn = true;
  }

  logOut() {
    this.isLogIn = false;
  }
}
