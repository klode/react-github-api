import React from 'react';
import ReactDOM from 'react-dom';
import SearchUsers from'./SearchUsers';
import Profile from'./Profile';

class App extends React.Component {
    constructor() {
        super();
        //this.state = {};
        this.update = this.update.bind(this);
    }
    update(e) {
        //this.setState({});
    }
    render(){
        return (
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
              <span className="mdl-layout-title">Find GitHub Users</span>
              <div className="mdl-layout-spacer"></div>
              <SearchUsers/>
            </div>
            <div className="mdl-cell mdl-cell--8-col"><Profile/></div>
          </div>
        )
    }
}

export default App
