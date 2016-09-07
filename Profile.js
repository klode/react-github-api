import React from 'react';
import ReactDOM from 'react-dom';


class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null
        };
    }

    render() {
        console.log('Profile props', this.props.user);
        let avatar_url = this.props.user.avatar_url;

        return (
            <div className="profile-card mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title">
                  <a href={this.props.user.html_url} target="_blank"><img className="avatar" src={avatar_url} /></a>
                  <h2 className="mdl-card__title-text">{this.props.user.name || this.props.user.login}</h2>
                </div>



                <div className="mdl-card__supporting-text">
                  <div className="profile-location" >{this.props.user.location}</div>
                  <div className="profile-details">
                    <li><div>followers</div><div>{this.props.user.followers}</div></li>
                    <li><div>following</div><div>{this.props.user.following}</div></li>
                    <li><div>repos</div><div>{this.props.user.public_repos}</div></li>
                  </div>
                </div>
            </div>
        )
    }
}
export default Profile;
