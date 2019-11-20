import React, { Component } from 'react'
import { TimelineLite, Power3, Power1 } from 'gsap'



class Slide extends Component {
  styles = {
    backgroundImage: `url(${this.props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
   
  
  }
  

  constructor(props){
    super(props)

    	// reference to the DOM node
    this.bankShotMovingLogo = null;
    this.bankShotMovingLogoMobile = null;
    
  }


  componentDidMount(){
		this.bankShotMovingLogo = new TimelineLite({ paused:false })
		.set(this.bankShotMovingLogo, {
    y: 0,
    x:0,
		opacity:0
    })		
    .to(this.bankShotMovingLogo, 2, {opacity:0, })
		.to(this.bankShotMovingLogo, 3, {opacity:1, scale:5, ease:Power3.easeInOut})
    .to(this.bankShotMovingLogo, 1, {opacity:0,scale:1, ease:Power1.easeIn})



    this.bankShotMovingLogoIpad = new TimelineLite({ paused:false })
		.set(this.bankShotMovingLogoIpad, {
    y: 0,
    x:0,
		opacity:0
    })	
    .to(this.bankShotMovingLogoIpad, 2, {opacity:0, })	
    .to(this.bankShotMovingLogoIpad, 3, {opacity:1, scale:4, ease:Power3.easeInOut})
    .to(this.bankShotMovingLogoIpad, 1, {opacity:0,scale:1, ease:Power1.easeIn})

    this.bankShotMovingLogoMobile = new TimelineLite({ paused:false })
		.set(this.bankShotMovingLogoMobile, {
    y: 0,
    x:0,
		opacity:0
    })		
    .to(this.bankShotMovingLogoMobile, 2, {opacity:0, })
		.to(this.bankShotMovingLogoMobile, 3, {opacity:1, scale:3, ease:Power3.easeInOut})
    .to(this.bankShotMovingLogoMobile, 1, {opacity:0,scale:1, ease:Power1.easeIn})   
    
}





  render(){
    return(
      <div className="slide " style={this.styles}>

       <div className=' uk-visible@m imagePopper'>
          <img
            src="../css/images/bankshotNewLogo.jpg"
            id='bankShotMovingLogo'
            ref={ img => this.bankShotMovingLogo = img }
            ></img>        
        </div>
       
        <div className='uk-visible@s uk-hidden@m imagePopper'>
          <img
            src="../css/images/bankshotNewLogo.jpg"
            id='bankShotMovingLogo'
            ref={ img => this.bankShotMovingLogoIpad = img }
            ></img>
        </div>

        <div className='uk-hidden@s imagePopper'>
          <img
            src="../css/images/bankshotNewLogo.jpg"
            id='bankShotMovingLogo'
            ref={ img => this.bankShotMovingLogoMobile = img }
            ></img>
        </div>

      </div>
    )
  }
}



export default Slide