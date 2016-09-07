import React from 'react';
import ReactDOM from 'react-dom';

export class SearchInput extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    let username = ReactDOM.findDOMNode(this.refs.username).value;
    this.props.onSubmit(username);
    ReactDOM.findDOMNode(this.refs.username).value = '';
  }
  render() {
    var divStyle = {
      paddingLeft: '15px'
    };
    return (
      <form onSubmit={this.onSubmit} style={divStyle}>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input"
              type="text"
              ref="username"
              placeholder="Search for a username..."/>
          <label className="mdl-textfield__label">Type Username + Enter</label>
        </div>
      </form>
    )
  }
}

SearchInput.defaultProps = {
  onSubmit: (s) => console.log(s)
}
export default SearchInput;

