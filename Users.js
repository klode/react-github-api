import React from 'react';
import ReactDOM from 'react-dom';

class Users extends React.Component {
    render() {
        console.log('Users.render: props.users=', this.props.users);

        let onUserClick = this.props.onUserClick;
        let activeUserId = this.props.activeUserId

        let users = this.props.users.map(function(item, index) {
            let active = activeUserId === item.id ? 'active' : '';
            return (
                <li className={`mdl-list__item ${active}`}
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
            <ul className="mdl-list scroll">
                {users}
            </ul>
        )
    }
}
Users.defaultProps = {
    users: [],
    onUserClick: (item) => console.log(item),
    activeUserId: ''
}
export default Users;
