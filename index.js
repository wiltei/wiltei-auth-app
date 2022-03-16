import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
      console.log(e.target.querySelector.value)
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let authorizedOrNot = <h1>{this.state.authorized ? 'Contact':'Enter the Password'} </h1>; 
    let login = (
      /* onSubmit sijoittuu siis form:iin eikä input:iin, erheistä oppii*/
    <form action="#" onSubmit={this.authorize}>
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>);
    const contactInfo = (
      <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
    );
    return (
      <div id="authorization">{authorizedOrNot}
      {this.state.authorized ? contactInfo : login}
      </div>

    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('root')
);
/* My original way
let authorized;
    if (!this.state.authorized) {
      authorized = (
        <div>
          <h1>Enter the Password</h1>
          </div>
      )
    } else {
      authorized = (
        <div>
          <h1>Contact</h1>
          <ul>
            <li>
              client@example.com
            </li>
            <li>
              555.555.5555
            </li>
          </ul>
          </div>
      )
    } 
*/