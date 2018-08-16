import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {


  login = (username, password) => {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://sarthakwebdevnode.herokuapp.com/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
  }

  updateUser = user =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/user/update', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  currentUser = () =>
    fetch('https://sarthakwebdevnode.herokuapp.com/currentUser', {
      credentials: 'include'
    }).then(response => response.json())


  logout = () =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    })


  profile = () =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/profile', {
      credentials: 'include',
    }).then(response => response.json())


  createUser = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://sarthakwebdevnode.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  authenticate = () =>
    fetch('https://sarthakwebdevnode.herokuapp.com/api/auth', {
      credentials: 'include'
    }).then(response => (response.json()))

}
