import React, { Component } from 'react';
import './Validation.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  onKeyPress = (e) => {
    e.key === 'Enter' && this.onClick();
  };

  render() {
    const { password, clicked, validated } = this.state;
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          name="password"
          type="password"
          value={password}
          onChange={this.onChange}
          className={clicked ? (validated ? 'success' : 'failure') : ''}
          onKeyPress={this.onKeyPress}
          maxLength={4}
        />
        <button onClick={this.onClick}>검증</button>
      </div>
    );
  }
}

export default ValidationSample;
