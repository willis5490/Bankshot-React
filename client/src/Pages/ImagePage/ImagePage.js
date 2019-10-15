import React, { Component } from 'react';
import Instagram from 'node-instagram';



class ImagesPage extends Component {
  style1={
    backgroundColor:'black',

  }

  instagram = new Instagram({
    clientId: process.env.REACT_APP_INSTA_ID,
    clientSecret: process.env.REACT_APP_INSTA_SECRET,
    accessToken: process.env.REACT_APP_INSTA_TOKEN,
  });

  componentDidMount(){
    this.instaLoad()
  }

  state={
    images:[],
    videos:[]
  }
  instaLoad = () => {
    this.instagram.get('users/self/media/recent', (err, data) => { 
      if (err) {
        // an error occured
        console.log(err);
      } else {    
        var video=[]
        var image=[]
        var bigData = data.data
            for (var i = 0; i<bigData.length;i++){
              // console.log(bigData[0].videos.standard_resolution.url);
              var types=bigData[i].type
              if(types==='video'){
                     video.push(bigData[i].videos.standard_resolution.url)
              }
              else{
                     image.push(bigData[i].images.standard_resolution.url)
              }                        
            }

            this.setState({
              images:image,
              videos:video
            })
      }
    })

  }

  // render nav
  render() {
    console.log(this.state.images)
    console.log(this.state.videos)
    return (
      <div>         
          <div id='ImagesPageWrapper1'>
            <div className='uk-container'>
            <div uk-grid='true'>
                 <div className='uk-width-1-1'>
                    <h1 className='uk-text-center sectionHeaders'>IMAGES</h1>  
                </div>                
             </div> 
             <div  className='uk-grid-match' uk-grid='true'>
                <div className='uk-width-1-2@m uk-width-1-1'>               
                  <img className='imagesMobile'src={this.state.images[0]}></img>
                </div> 
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className='imagesMobile'src={this.state.images[1]}></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1 '>
                  <img className='imagesMobile uk-margin-medium-bottom'src={this.state.images[2]}></img>                
                </div>
                <div className='uk-width-1-2@m uk-width-1-1 '>               
                  <img className='imagesMobile'src={this.state.images[10]}></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className='imagesMobile'src={this.state.images[3]}></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>               
                  <img className='imagesMobile'src={this.state.images[4]}></img>
                </div>        
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className='imagesMobile'src={this.state.images[5]}></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className='imagesMobile'src={this.state.images[6]}></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className='imagesMobile'src={this.state.images[7]}></img>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <img className='imagesMobile'src={this.state.images[8]}></img>
                </div>
                <div className=' uk-width-1-2@m uk-width-1-1 uk-margin-medium-bottom uk-visible@m'>
                  <img className='imagesMobile'src={this.state.images[9]}></img>
                </div>
                <div className=' uk-width-1-2@m uk-width-1-1 uk-hidden@m'>
                  <img className='imagesMobile'src={this.state.images[9]}></img>
                </div>
                <div className=' uk-width-1-2@m uk-width-1-1 uk-margin-medium-bottom'>
                  <img className='imagesMobile 'src={this.state.images[11]}></img>
                </div>
               
              </div>            
  
            </div>
          </div>
      </div>
    );
  }
}


export default ImagesPage;
