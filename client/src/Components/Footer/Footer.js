import React, { Component } from 'react';


class Footer extends Component {

  // render nav
  render() {
    return (
      <div>
            <nav id="footerBody" className="uk-navbar-container  uk-text-center " uk-navbar='true' uk-navbar="mode: click" uk-grid='true'>
        
                  <div id="leftfooter" className="uk-width-1-3@m uk-width-1-1 uk-text-center uk-margin-medium-top   uk-margin-auto-vertical ">    
                        <div className='uk-align-left@m uk-align-center'>
                        <a className='footerButtons' style={{padding:'20px', color:'white', marginTop:'15px'}} target="_blank" href="https://www.instagram.com/bankshotco/"><i class="fab fa-instagram fa-2x"></i></a>                    
                        <a className='footerButtons' style={{padding:'20px', color:'white'}} target="_blank" href="https://www.facebook.com/bankshotband"><i class="fab fa-facebook-square fa-2x"></i></a>
                        <a className='footerButtons' style={{padding:'20px', color:'white'}} target="_blank" href="https://m.soundcloud.com/bankshotco"><i class="fab fa-soundcloud fa-2x"></i></a>
                        </div>
                        
                  </div>
                  <div style={{paddingLeft:'0px'}} id='centerfooter' className="uk-width-1-3@m uk-width-1-1   uk-margin-medium-top uk-margin-auto-vertical">
                        <div  uk-grid='true'>
                              <div className='uk-width-1-2 uk-text-center'>                                       
                                    <ul id="middlenav" className="">   
                                    <li ><a className="footerLinks" id="mobile-links" href="/"><b><i>HOME</i></b></a></li>                                                   
                                    <li ><a className="footerLinks" id="mobile-links" href="/About"><b><i>ABOUT</i></b></a></li>
                                    <li ><a className="footerLinks" id="mobile-links" href="/Contact"><b><i>CONTACT</i></b></a></li>                                                                                   
                                    </ul>
                              </div>
                              
                              <div className='uk-width-1-2 uk-text-center'>
                              <ul id="middlenav" className="">                                                      
                                    <li ><a className="footerLinks2" id="mobile-links" href="/Images"><b><i>IMAGES</i></b></a></li>
                                    <li ><a className="footerLinks2" id="mobile-links" href="/Videos"><b><i>VIDEOS</i></b></a></li>
                                    <li className='uk-hidden@m'><a className="footerLinks2" id="mobile-links" target="_blank" href="https://www.facebook.com/bankshotband/events"><b><i>SHOWS</i></b></a></li>
                                    <li className='uk-visible@m'><a className="footerLinks2" id="mobile-links" target="_blank" href="https://www.facebook.com/bankshotband/events"><b><i>SHOWS</i></b></a></li>
                                    
                                    </ul>
                              </div>
                        </div>
                  </div>
                  <div id='rightfooter' className="uk-width-1-3@m uk-width-1-1 uk-text-center uk-flex-first uk-flex-last@m footletters  uk-margin-medium-top uk-margin-auto-vertical">
                        <img className='uk-align-right@m uk-align-center' style={{padding:'15px'}} id="logoimageFooter"src="./css/images/bankshotphoto.JPG"></img>                        
                  </div>
            
            </nav>

      </div>
    );
  }
}


export default Footer;
