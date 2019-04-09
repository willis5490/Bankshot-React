import React, { Component } from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm.js'


class Home extends Component {

  // render nav
  render() {
    return (
      <div>


          <div style={{backgroundColor:'white'}} id='homeWrapper1'>
            <div className='uk-container'>
                <div uk-grid='true'>
                     <div className='uk-width-1-1'>
                        <div class="uk-container" id="bankshotMainLogo">
                            <a href="/Videos"><img id="mainPic" src="./css/images/bankshotphoto.JPG" alt="Bankshot band logo"/></a>
                        </div>
                     </div>
                </div>
            </div>
          </div>

           <div id='homeWrapper2' className='uk-margin-medium-bottom'>
            <div className='uk-container'>
                <div uk-grid='true'>
                     <div className='uk-width-1-1'>
                        <h1  class="sectionHeaders" uk-parallax="opacity: 0,1; y: -75,0; scale: 0.25,1; viewport: 0.5;">BANKSHOT <br></br> MUSIC</h1>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-text-center'>
                        <div class="uk-card uk-card-default uk-card-body"  uk-parallax="opacity: 0,1; y: -75,0; scale: 0.5,1; viewport: 0.5;">
                            <h2>Whad'ya Say?</h2>
                            <h3>Live Recording</h3>
                            <audio src="./css/images/1. Bill's Funk (raw).mp3" controls></audio>
                            <h6>Exactly what you hear when you come to one of our shows!</h6>
                        
                        </div>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-text-center'>
                        <div class="uk-card uk-card-default uk-card-body"  uk-parallax="opacity: 0,1; y: -75,0; scale: 0.5,1; viewport: 0.5;">
                            <h2>Get Down</h2>
                            <h3>Live Recording</h3>
                            <audio src="./css/images/3. Get Down Girl (raw).mp3" controls></audio>
                            <h6>Exactly what you hear when you come to one of our shows!</h6>
                            
                        </div>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-text-center'>
                        <div class="uk-card uk-card-default uk-card-body"  uk-parallax="opacity: 0,1; y: -75,0; scale: 0.5,1; viewport: 0.5;">
                            <h2>Vitamin</h2>
                            <h3>Live Recording</h3>
                            <audio src="./css/images/5. Vitamin (raw).mp3" controls></audio>
                            <h6>Exactly what you hear when you come to one of our shows!</h6>
                        
                        </div>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-text-center'>
                        <div class="uk-card uk-card-default uk-card-body" uk-parallax="opacity: 0,1; y: -75,0; scale: 0.5,1; viewport: 0.5;">
                            <h2>Into the Grey</h2>
                            <h3>Studio Recording</h3>
                            <audio src="./css/images/into grey final.mp3" controls></audio>
                            <h6>Close to what you hear at one of our shows.</h6>
                            
                        </div>
                     </div>
                </div>
            </div>
          </div>

           <div style={{backgroundColor:'white'}}  id='homeWrapper3'>
            <div className='uk-container'>
                <div uk-grid='true'>
                     <div className='uk-width-1-1'>
                        <h1 id="bio" class="sectionHeaders" uk-parallax="opacity: 0,1; y: -100,0; scale: 0.25,1; viewport: 0.5;">THE BAND</h1>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1" >
                                <div class="uk-card-media-left uk-cover-container ">
                                    <img className="cardPics uk-margin-medium-top" src="./css/images/wills-bio-pic3.jpg" alt="Bankshot band singer Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    <div class="uk-card-body">
                                        <h2 class="uk-card-title uk-margin-remove-bottom"><b>Willis</b></h2>
                                        <h3 class="uk-margin-remove-top"><i>Vocals</i></h3>
                                        <p>The main reason Santa is so jolly is because he knows where all the bad girls live.....</p>
                                        <a href="/About" uk-toggle>Read Full Bio Here</a>
                                    </div>
                                </div>
                        </div>                    
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1 uk-flex-first@m uk-flex-last" >                               
                                <div class="uk-card-body ">
                                    <h2 class="uk-card-title  uk-margin-remove-bottom"><b>Graham Rendell</b></h2>
                                    <h3 class="uk-margin-remove-top"><i>Guitar</i></h3>
                                    <p>I was born in Colorado, and I love playing guitar. Bankshot is my favorite band ...</p>
                                    <a href="#grahams-modal" uk-toggle>Read Full Bio Here</a>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    
                                    <div class="uk-card-media-right uk-cover-container">
                                    <img class="cardPics uk-margin-medium-top" src="./css/images/graham-bio-pic.jpg" alt="Bankshot band guitar player Denver, CO"  uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                </div>
                                </div>
                        </div>                    
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1" >
                                <div class="uk-card-media-left uk-cover-container ">
                                    <img className="cardPics uk-margin-medium-top" src="./css/images/tylers-bio-photo.jpg" alt="Bankshot band drum player Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    <div class="uk-card-body  ">
                                        <h2 class="uk-card-title  uk-margin-remove-bottom"><b>Tyler Zandstra</b></h2>
                                        <h3 class="uk-margin-remove-top"><i>Drums</i></h3>
                                        <p>The details of my life are quite inconsequential.  My father was ...
                                
                                        </p>
                                        <a href="#tyler-modal" uk-toggle>Read Full Bio Here</a>
                                    </div>
                                </div>
                        </div>                    
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1 uk-flex-first@m uk-flex-last" >                               
                                <div class="uk-card-body">
                                    <h2 class="uk-card-title  uk-margin-remove-bottom"><b>Bill Ryan</b></h2>
                                    <h3 class="uk-margin-remove-top"><i>Bass</i></h3>
                                    <p>"The love child of Bootsy Collins and the "Brown Note", Bill...</p>
                                    <a href="#bills-modal" uk-toggle>Read Full Bio Here</a>
                                    </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    
                                    <div class="uk-card-media-right uk-cover-container">
                                    <img class="cardPics uk-margin-medium-top" src="./css/images/bill-bio-pic.jpg" alt="Bankshot band bass player Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                </div>
                                </div>
                        </div>                    
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-margin-medium-bottom'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1" >
                                <div class="uk-card-media-left uk-cover-container ">
                                    <img className="cardPics uk-margin-medium-top"  src="./css/images/whits-bio-pic.png" alt="Bankshot band keyboard player Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    <div class="uk-card-body">
                                        <h2 class="uk-card-title  uk-margin-remove-bottom"><b>Whit Garling</b></h2>
                                        <h3 class="uk-margin-remove-top"><i>Keyboard</i></h3>
                                        <p>The truth of the world is that it is actually chaotic. The truth is...</p>
                                        <a href="#whits-modal" uk-toggle>Read Full Bio Here</a>
                                    </div>
                                </div>
                        </div>                    
                     </div>
                     
                     
                </div>
            </div>
          </div>

          <div>
              <ContactForm contactHeader={'Contact Us'}></ContactForm>
          </div>


      </div>
    );
  }
}


export default Home;
