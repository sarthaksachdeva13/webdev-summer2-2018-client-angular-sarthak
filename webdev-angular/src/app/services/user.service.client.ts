import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch('http://localhost:3000/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  currentUser = () =>
    fetch('http://localhost:3000/currentUser', {
      credentials: 'include'
    }).then(response => response.json())
}
