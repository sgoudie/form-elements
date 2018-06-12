import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Contact us</h2>
        <p>Fill out this form to contact our company.</p>
        <ContactForm />
      </div>
    );
  }
}

export default styled(App)`
  font-size: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;
