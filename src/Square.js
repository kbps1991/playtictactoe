import React from 'react';
import './App.css';

export default class Square extends React.Component {
    constructor(props) {
      super();
    }
    render() {
      return (
        <div className="square" onClick={this.props.onClick}>
          {this.props.value}
        </div>
      );
    }
  }
