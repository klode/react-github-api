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
        var divStyle = {
            backgroundImage: 'url(' + avatar_url + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        };

        return (
            <div className="demo-card mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title">
                    <a href={this.props.user.html_url} target="_blank"><img className="avatar" src={avatar_url} /></a>
                    <h2 className="mdl-card__title-text">{this.props.user.name || this.props.user.login}</h2>
                </div>



                <div className="mdl-card__supporting-text">
                    {this.props.user.location}
                  <li>followers: {this.props.user.followers}</li>
                  <li>repos: {this.props.user.public_repos}</li>
                </div>
            </div>
        )
    }
}
export default Profile;
