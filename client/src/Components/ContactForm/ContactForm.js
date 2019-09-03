import React, { Component } from 'react';
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";




class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    inquiry: '',
    message: '',
    cappa:false
   }

   notify = () => {
    toast.success("Your Email Has Been Sent !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError = () => {
    toast.error("You Must Fill Out All Forms !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError2 = () => {
    toast.error("You Must Verify You Are Not A Robot !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

   sendEmail = event => {
    //  event.preventDefault()
     if(this.state.name === ''){
       this.notifyError()
     }else if(this.state.email === ''){
      this.notifyError()
     }else if(this.state.inquiry === ''){
      this.notifyError()
     }else if(this.state.message === ''){
      this.notifyError()
     }
     else if(this.state.cappa === false){
      this.notifyError2()
     }
     else {
      axios.post("https://www.bankshotmusic.com/sendEmail", {
        email: this.state.email,
         name: this.state.name,
         inquiry: this.state.inquiry,
         message: this.state.message
       })
         .then((response) => {
          console.log(response)
         })
         .catch((err) => {
           console.log(err)
         })
         this.notify()
         this.emptyFields()
         
     }


   };

   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };

   emptyFields = () => {
     this.setState({
       name: '',
       email: '',
       inquiry: '',
       message: ''
     })
   }
    onChange(value) {
    console.log("Captcha value:", value);
  }


  // render nav
  render() {
    return (
      <div id='contactWrapper' className=" uk-animation-scale-up uk-transform-origin-top-right">
       <div className="uk-section">
         <h1  id="contact" className="uk-heading-line uk-text-center sectionHeaders">{this.props.contactHeader}</h1>

         <h3 style={{color:'white'}} className='contactHeader uk-text-center contacth2 uk-margin-remove'>{this.props.contactText}</h3>

         <h4 style={{color:'white'}} id='formheader' className='uk-text-center'>Fill out your information below.</h4>

         <div className="formDiv ">
           <form>
             <fieldset className="uk-fieldset ">
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                   <input
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   name='name'
                    className="uk-input ContactInputBody"
                    type="text"
                    placeholder="Name" />
                 </div>
               </div>
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon:  pencil"></a>
                   <input
                   value={this.state.email}
                   onChange={this.handleInputChange}
                   name='email'
                    className="uk-input ContactInputBody"
                    type="text"
                    placeholder="Email" />
                 </div>
               </div>
               <div id="inquireInput" className="uk-margin uk-width-1-1">
                 <select
                  value={this.state.inquiry}
                  onChange={this.handleInputChange}
                  name='inquiry'
                 className="uk-select ContactInputBody">
                   <option>{`Whats on your mind?`}</option>
                   <option>I just wanna give love</option>
                   <option>I am interested in booking the band</option>
                   <option>I have a general question</option>                 
                   <span uk-icon="icon: chevron-down"></span>
                 </select>
               </div>

               <div id="textInput" className="uk-margin uk-width-1-1">

                 <textarea
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  name='message'
                  className="uk-textarea ContactInputBody"
                  rows="5"
                  placeholder="Write your message here...">
                  </textarea>
               </div>
             </fieldset>
           </form>
           
           <button onClick={this.sendEmail} id="send-button" type="submit" name="action" className="uk-align-center uk-button uk-margin-auto uk-button-primary uk-button-large uk-width-large">Send</button>
         </div>
         <ToastContainer position="bottom-center" autoClose={4000} />
         <ReCAPTCHA
          sitekey="6LdPOZ0UAAAAAOfpHzcW5HW5T6M_Ns5PU3tPS3hQ"
          onChange={()=>{this.onChange();
            this.setState({
              cappa:true
            })
          }}
          data-theme="dark" 
        />
       </div>
       </div>
     );
  }
}


export default ContactForm;
