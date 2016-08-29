import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './SearchInput';
import Users from './Users';

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

export default SearchUsers;
