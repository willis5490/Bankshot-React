import React, { Component } from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm.js'




class Contact extends Component {




  // render nav
  render() {
    return (
      <div>
        <ContactForm contactHeader={'Contact BankShot'} contactText={'Want to show some love or book us? Contact us and we will get back to you ASAP!'}></ContactForm>
      </div>
    );
  }
}


export default Contact;
