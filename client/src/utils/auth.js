
import decode from 'jwt-decode';

// create a new class to instantiate for a user and collect their information and methods
class Auth {
  getUser() {
    return decode(this.getToken());
  }


  // check if user's logged in - if there is a token in localStorage and if it's valid
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check if token is expired - if it is, then the user is not logged in
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }



  // Saves user token to localStorage and reloads the page
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  
  // Clear user token and profile data from localStorage and force logout with reload
  
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new Auth();