import React, { Component } from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm.js'
import Slider from '../../Slider'



class Home extends Component {
  

    
  // render nav
  render() {
    return (
      <div>


          <div style={{backgroundColor:'white'}} >
            
                <div uk-grid='true'>
                     <div className='uk-width-1-1'>
                        <Slider />                        
                     </div>
                </div>
          
          </div>

           <div id='homeWrapper2' className='uk-margin-medium-bottom'>
            <div className='uk-container'>
                <div uk-grid='true'>
                     <div className='uk-width-1-1'>
                        <h1  class="sectionHeaders" uk-parallax="opacity: 0,1; y: -75,0; scale: 0.25,1; viewport: 0.5;">MUSIC</h1>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-text-center'>
                        <div class="uk-card uk-card-default uk-card-body"  uk-parallax="opacity: 0,1; y: -75,0; scale: 0.5,1; viewport: 0.3;">
                            <h2>B(e) Funk (Live)</h2>                        
                            <audio src="./css/images/1. Bill's Funk (raw).mp3" controls></audio>
                            
                        
                        </div>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-text-center'>
                        <div class="uk-card uk-card-default uk-card-body"  uk-parallax="opacity: 0,1; y: -75,0; scale: 0.5,1; viewport: 0.3;">
                            <h2>Get Down Girl (Live)</h2>                            
                            <audio src="./css/images/3. Get Down Girl (raw).mp3" controls></audio>
                         
                            
                        </div>
                     </div>                     
                </div>
            </div>
          </div>

          <div id='homeWrapperPhoto' className=''>
              <div className='uk-container '>
                <div uk-grid='true' className=''>
                    <div className='uk-with-1-1 uk-width-1-3@m uk-visible@m uk-margin-large-top uk-margin-large-bottom'>                     
                        <img className='homePhotoWrapper' src="./css/images/BankShotCo-42.jpg"></img>
                    </div>
                    <div className='uk-with-1-1 uk-width-1-3@m uk-margin-large-top uk-margin-large-bottom'>
                        <img id='middleHomePhotoBill' className='' src="./css/images/BankShotCo-12.jpg"></img>
                    </div>
                    <div className='uk-with-1-1 uk-width-1-3@m uk-visible@m uk-margin-large-top uk-margin-large-bottom'>
                        <img className='homePhotoWrapper2 uk-margin-medium-bottom' src="./css/images/BankShotCo-26.jpg"></img>                   
                    </div>
                </div>
              </div>
          </div>

           <div style={{backgroundColor:'#E2E3E3'}}  id='homeWrapper3'>
            <div className='uk-container'>
                <div uk-grid='true'>
                     <div className='uk-width-1-1'>
                        <h1 id="bio" class="sectionHeaders" uk-parallax="opacity: 0,1; y: -100,0; scale: 0.25,1; viewport: 0.5;">THE BAND</h1>
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1" >
                                <div class="uk-card-media-left uk-cover-container ">
                                    <img className="cardPics uk-margin-small-top" src="./css/images/BankShotCo-14.jpg" alt="Bankshot Music Singer Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                    <div className='picButtonHomeCard' uk-grid='true' uk-lightbox="animation: scale">
                                            <div className=''>
                                                <a class="uk-inline" href="./css/images/BankShotCo-4.jpg" >
                                                    <h4 class="uk-button uk-button-default" >More Pics...</h4>
                                                </a>
                                            </div>
                                            <div className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-40.jpg" >                                            
                                                </a>
                                            </div>
                                            <div className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-14.jpg" >                                            
                                                </a>
                                            </div>
                                            <div className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-45.jpg" >                                            
                                                </a>
                                            </div>
                                            <div className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-25.jpg" >                                            
                                                </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    <div class="uk-card-body">
                                        <h2 class="uk-card-title uk-margin-remove-bottom"><b>Wilis</b></h2>
                                        <h3 class="uk-margin-remove-top"><i>Vocals</i></h3>
                                        <p>The main reason Santa is so jolly is because he knows where all the bad girls live.....</p>
                                        <a  class="uk-button uk-button-default" href="/About#willBio" uk-toggle>Read More...</a>
                                       
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
                                    <a  class="uk-button uk-button-default" href="/About#grhamBio" uk-toggle>Read More...</a>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    
                                    <div class="uk-card-media-right uk-cover-container">
                                    <img class="cardPics uk-margin-small-top" src="./css/images/BankShotCo-27.jpg" alt="Bankshot Music Guitar Player Denver, CO"  uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                    <div className='picButtonHomeCard' uk-grid='true' uk-lightbox="animation: scale">
                                            <div>
                                                <a class="uk-inline" href="./css/images/BankShotCo-17.jpg" >
                                                    <h4 class="uk-button uk-button-default" >More Pics...</h4>
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-8.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-37.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-27.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-6.jpg" >                                            
                                                </a>
                                            </div>
                                        </div>
                                </div>
                                </div>
                        </div>                    
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1" >
                                <div class="uk-card-media-left uk-cover-container ">
                                    <img className="cardPics uk-margin-small-top" src="./css/images/BankShotCo-43.jpg" alt="Bankshot Music Drum Player Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                    <div className='picButtonHomeCard' uk-grid='true' uk-lightbox="animation: scale">
                                            <div>
                                                <a class="uk-inline" href="./css/images/BankShotCo-18.jpg" >
                                                    <h4 class="uk-button uk-button-default" >More Pics...</h4>
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-49.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-21.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-44.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-34.jpg" >                                            
                                                </a>
                                            </div>
                                          
                                            
                                        </div>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    <div class="uk-card-body  ">
                                        <h2 class="uk-card-title  uk-margin-remove-bottom"><b>Tyler Zandstra</b></h2>
                                        <h3 class="uk-margin-remove-top"><i>Drums</i></h3>
                                        <p>The details of my life are quite inconsequential.  My father was ...
                                
                                        </p>
                                        <a class="uk-button uk-button-default" href="/About#tylerBio" uk-toggle>Read More...</a>                                       
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
                                    <a  class="uk-button uk-button-default" href="/About#billsBio" uk-toggle>Read More...</a>
                                    </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    
                                    <div class="uk-card-media-right uk-cover-container">
                                    <img class="cardPics uk-margin-small-top" src="./css/images/BankShotCo-24.jpg" alt="Bankshot Music Bass Guitar Player Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                    <div className='picButtonHomeCard' uk-grid='true' uk-lightbox="animation: scale">
                                            <div>
                                                <a class="uk-inline" href="./css/images/BankShotCo-9.jpg" >
                                                    <h4 class="uk-button uk-button-default" >More Pics...</h4>
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-5.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-12.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-48.jpg" >                                            
                                                </a>
                                            </div>
                                            <div  className='hiddenHomeDivs'>
                                                <a class="uk-inline" href="./css/images/BankShotCo-13.jpg" >                                            
                                                </a>
                                            </div>
                                        </div>
                                </div>
                                </div>
                        </div>                    
                     </div>
                     <div className='uk-width-1-2@m uk-width-1-1 uk-margin-medium-bottom'>
                        <div class="uk-card uk-card-default uk-grid-collapse  uk-margin" uk-grid uk-parallax="opacity: 0,1,1; y: 200,0,0;   viewport: .35;" uk-grid='true'>
                            <div class="uk-width-1-2@m uk-with-1-1" >
                                <div class="uk-card-media-left uk-cover-container ">
                                    <img className="cardPics uk-margin-small-top"  src="./css/images/whits-bio-pic.png" alt="Bankshot Music keyboard player Denver, CO" uk-cover='true'/>
                                    <canvas width="500" height="400"></canvas>
                                    <div className='picButtonHomeCard' uk-grid='true' uk-lightbox="animation: scale">
                                            <div>
                                                <a class="uk-inline" href="./css/images/whits-bio-pic.png" >
                                                    <h4 class="uk-button uk-button-default" >More Pics...</h4>
                                                </a>
                                            </div>                                           
                                        </div>
                                </div>
                            </div>
                                <div className='uk-width-1-2@m uk-with-1-1'>
                                    <div class="uk-card-body">
                                        <h2 class="uk-card-title  uk-margin-remove-bottom"><b>Whit Garling</b></h2>
                                        <h3 class="uk-margin-remove-top"><i>Keyboard</i></h3>
                                        <p>The truth of the world is that it is actually chaotic. The truth is...</p>
                                        <a  class="uk-button uk-button-default" href="/About#whitsBio" uk-toggle>Read More...</a>
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
