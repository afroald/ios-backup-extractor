import React, { Component } from 'react';

import Button from './photon/Button';

const style = {
  main: {
    height: '100%',
    backgroundColor: '#f6f6f6',
  },
  content: {
    maxWidth: '500px',
    margin: '100px auto',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  formInputContainer: {
    flexGrow: '1',
    marginRight: '10px',
  }
}

export default class UnlockForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.props.onUnlock) {
      const password = this.passwordInput.value;
      this.props.onUnlock(password);
    }
  }

  render() {
    return (
      <div style={style.main}>
        <div style={style.content}>
          <p>This backup is encrypted. Please provide the password.</p>
          <form style={style.form} onSubmit={this.onSubmit}>
            <div style={style.formInputContainer}>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                ref={input => this.passwordInput = input} />
            </div>
            <div>
              <Button style="primary" size="large">Unlock</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
