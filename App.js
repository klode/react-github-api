import React from 'react';
import ReactDOM from 'react-dom';
import SearchUsers from'./SearchUsers';
import Profile from'./Profile';

const API = 'https://api.github.com/users';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          users:[],
          username: null,
          user: {}
        };
        this.update = this.update.bind(this);
        this.fetchProfile('klode');
    }
    update(users) {
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
      let url = `${API}/${username}`;
      fetch(url)
        .then((res) => res.json() )
        .then((data) => {
            console.log(data);
            this.setState({
                user: data
            });
          // this.setState({
          //   username: data.login,
          //   name: data.name,
          //   avatar: data.avatar_url,
          //   location: data.location,
          //   repos: data.public_repos,
          //   followers: data.followers,
          //   following: data.following,
          //   homeUrl: data.html_url,
          //   notFound: data.message
          // });
        })
        .catch((error) => console.log('Oops! . There Is A Problem') );
    }
    render(){
        let username = this.state.users[0] ? this.state.users[0].login : null;
        console.log('App.render');
        return (
          <div className="mdl-grid">
            <div className="search-users mdl-cell mdl-cell--4-col mdl-shadow--2dp">
            <div className="header">
              <span className="mdl-layout-title">Find GitHub Users</span>
              <div className="mdl-layout-spacer"></div>
            </div>
              <SearchUsers onSearch={this.update} onUserClick={this.onUserClick.bind(this)} users={this.state.users}/>
            </div>
            <div className="mdl-cell mdl-cell--8-col"><Profile user={this.state.user}/></div>
          </div>
        )
    }
}

export default App
