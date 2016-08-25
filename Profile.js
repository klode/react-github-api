import React from 'react';
import ReactDOM from 'react-dom';

const API = 'https://api.github.com/search/users';
class Profile extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">User Profile</h2>
                </div>
                <div className="mdl-card__supporting-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
                </div>
            </div>
        )
    }
}
export default Profile;
