import React from 'react';
import ReactDOM from 'react-dom';

const API = 'https://api.github.com/search/users';
class SearchUsers extends React.Component {
    constructor() {
        super();
        this.state = {users: []};
        this.handleForm = this.handleForm.bind(this);
        this.searchUsername = this.searchUsername.bind(this);
    }

    handleForm(e) {
        e.preventDefault();
        let username = ReactDOM.findDOMNode(this.refs.username).value;
        this.searchUsername(username);
        ReactDOM.findDOMNode(this.refs.username).value = '';
    }

    searchUsername(username) {
        //let url = `${API}?q=${username}+repos:${'>10'}`;
        let url = `${API}?q=${username}`;
        fetch(url)
          .then((res) => res.json() )
          .then((data) => {
            console.log(data);
            this.setState({
                users: data.items
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
    render() {
        return (
            <form onSubmit={this.handleForm}>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input"
                        type="text"
                        ref="username"
                        placeholder="Search for a username..."/>
                    <label className="mdl-textfield__label">Type Username + Enter</label>
                </div>
                <Users users={this.state.users}/>
            </form>
        )
    }
}

class Users extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        console.log('Users:', this.props.users);

        let users = this.props.users.map(function(item, index) {
            return (
                <li className="mdl-list__item" key={index}>
                    <span className="mdl-list__item-primary-content">
                      <img className="mdl-list__item-avatar" src={item.avatar_url} alt={item.login}/>
                      <span>{item.login}</span>
                    </span>
                </li>
            )
        });

        return (
            <div className="demo-list-action mdl-list">
                {users}
            </div>
        )
    }
}
Users.defaultProps = {
    users: []
}
export default SearchUsers;
