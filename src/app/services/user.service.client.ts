import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {


  login = (username, password) => {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
  }


  updateUser = user =>
    fetch('http://localhost:3000/api/user/update', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  currentUser = () =>
    fetch('http://localhost:3000/currentUser', {
      credentials: 'include'
    }).then(response => response.json())


  logout = () =>
    fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include'
    })


  profile = () =>
    fetch('http://localhost:3000/api/profile', {
      credentials: 'include',
    }).then(response => response.json())


  createUser = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  authenticate = () =>
    fetch('http://localhost:3000/api/auth', {
      credentials: 'include'
    }).then(response => (response.json()))

}
