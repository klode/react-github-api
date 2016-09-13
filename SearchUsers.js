import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './SearchInput';
import Users from './Users';
import api from './githubApi';

class SearchUsers extends React.Component {
    constructor() {
        super();
        this.searchUsername = this.searchUsername.bind(this);
        this.searchUsername('klode');
    }

    searchUsername(searchText) {
      api.searchUsers(searchText)
          .then((res) => {
            let users = res.items;
            console.log('SearchUsers.searchUsername()', users);

            this.props.onSearch(users);

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
