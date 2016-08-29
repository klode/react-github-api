import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './SearchInput';

const API = 'https://api.github.com/search/users';
class SearchUsers extends React.Component {
    constructor() {
        super();
        this.searchUsername = this.searchUsername.bind(this);

        this.searchUsername('klode');
    }

    searchUsername(username) {
        //let url = `${API}?q=${username}+repos:${'>10'}`;
        let url = `${API}?q=${username}`;
        fetch(url)
          .then((res) => res.json() )
          .then((data) => {
            console.log('in searchUsername', data);

            this.props.onSearch(data.items);

          })
          .catch((error) => console.log('Oops! . There Is A Problem', error) );
    }

    render() {
        return (
            <div>
              <SearchInput onSubmit={this.searchUsername}></SearchInput>
              <Users users={this.props.users} onUserClick={this.props.onUserClick} />
            </div>
        )
    }
}
SearchUsers.defaultProps = {
    users: [],
}

class Users extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log('Users.render: props.users=', this.props.users);

        let onUserClick = this.props.onUserClick;

        let users = this.props.users.map(function(item, index) {
            return (
                <li className="mdl-list__item"
                    onClick={() => onUserClick(item)}
                    key={index}>
                    <span className="mdl-list__item-primary-content">
                      <img className="mdl-list__item-avatar" src={item.avatar_url} alt={item.login}/>
                      <span>{item.login}</span>
                    </span>
                </li>
            )
        });

        return (
            <div className="demo-list-action mdl-list scroll">
                {users}
            </div>
        )
    }
}
Users.defaultProps = {
    users: [],
}
export default SearchUsers;
