import React, { Component } from 'react';
import Instagram from 'node-instagram';
import ReactPlayer from 'react-player'


class VideosPage extends Component {
  style1={
    backgroundColor:'black',
    
  }

  instagram = new Instagram({
    clientId: 'af34036bb85e44b5af36e351336fed88',
    clientSecret: 'ce035a6f51a34132a813fff78b0b35c9',
    accessToken: '9199417638.af34036.1a84eb74c3784a1fb1e31e1e79532b42',
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
            for (var i = 0; i<15;i++){
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
          <div id='VideosPageWrapper1'>
            <div className='uk-container'>
            <div uk-grid='true'>
                 <div className='uk-width-1-1'>
                        <h1 className='uk-text-center sectionHeaders'>Videos</h1>
                 </div>
                  <div class="uk-child-width-1-2@m uk-child-width-1-1 uk-text-center uk-margin-large-top" uk-grid='true'>
                    {this.state.videos.map( result => (
                      <div className='uk-margin-large-bottom' >
                          <ReactPlayer className='videoPlayer' style={this.style1} onReady={true} url={result} width={'500px'} playing={true} controls={true} light={true}/>
                        </div>
                    ))}                                    
                    </div>
              

             </div>             
  
            </div>
          </div>
      </div>
    );
  }
}


export default VideosPage;
