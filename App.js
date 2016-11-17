import React from 'react';
import ReactDOM from 'react-dom';
import SearchUsers from'./SearchUsers';
import Profile from'./Profile';
import api from './githubApi';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          users:[],
          username: null,
          user: {}
        };
        this.updateUsers = this.updateUsers.bind(this);
        this.onUserClick = this.onUserClick.bind(this);
        // default profile
        this.fetchProfile('klode');
    }
    updateUsers(users) {
        console.log('in update', users);
        this.setState({
            users: users
        });
    }

    onUserClick(user) {
        console.log('onUserClick', user);
        this.fetchProfile(user.login);
        this.setState({
            username: user.login
        });
    }

    fetchProfile(username) {
      console.log('fetchProfile', username);
      if(!username) {
          return;
      }

      api.getUser(username)
        .then((data) => {
            console.log('getUser', data);
            this.setState({
                user: data
            });
        })
        .catch((error) => console.log('Oops! . There Is A Problem') );
    }
    render(){
        //let username = this.state.users && this.state.users[0] ? this.state.users[0].login : null;
        console.log('App.render');
        return (
          <div className="mdl-grid">
            <div className="search-users mdl-cell mdl-cell--4-col mdl-shadow--2dp">
              <div className="header">
                <span className="mdl-layout-title">Find GitHub Users</span>
                <div className="mdl-layout-spacer"></div>
              </div>
              <SearchUsers
                onSearch={this.updateUsers}
                onUserClick={this.onUserClick}
                users={this.state.users}
                activeUserId={this.state.user.id}/>
            </div>

            <div className="mdl-cell mdl-cell--8-col">
              <Profile user={this.state.user}/>
            </div>
          </div>
        )
    }
}

export default App
