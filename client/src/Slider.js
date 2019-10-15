import React, { Component }  from 'react'
import Slide from './Slide'
import { TimelineLite, Power4, Power3 } from 'gsap'



class Slider extends Component {
	constructor(props) {
		super(props)

  
	  this.state = {
		images: [
			"./css/images/BankShotCo-19.jpg",
		  "./css/images/BankShotCo-17.jpg",
		  "./css/images/BankShotCo-2.jpg",		
		  "./css/images/BankShotCo-13.jpg", 
		],
		currentIndex: 0,
		translateValue: 0
	  }
	}
	

  
	goToPrevSlide = () => {
	  if(this.state.currentIndex === 0)
		return;
	  
	  this.setState(prevState => ({
		currentIndex: prevState.currentIndex - 1,
		translateValue: prevState.translateValue + this.slideWidth()
	  }))
	}
  
	goToNextSlide = () => {
	  // Exiting the method early if we are at the end of the images array.
	  // We also want to reset currentIndex and translateValue, so we return
	  // to the first image in the array.
	  if(this.state.currentIndex === this.state.images.length - 1) {
		return this.setState({
		  currentIndex: 0,
		  translateValue: 0
		})
	  }
	  
	  // This will not run if we met the if condition above
	  this.setState(prevState => ({
		currentIndex: prevState.currentIndex + 1,
		translateValue: prevState.translateValue + -(this.slideWidth())
	  }));
	}
  
	slideWidth = () => {
	   return document.querySelector('.slide').clientWidth
	}

	AutomaticTime = () => {
		setTimeout( () => this.goToNextSlide() , 2000);
	}

	DelayedTimeout = () => {
		setTimeout( () => this.AutomaticTime(), 4000)
	}
  
	render() {
	  return (
		<div className="slider ">
  
		  <div className="slider-wrapper "
			style={{
			  transform: `translateX(${this.state.translateValue}px)`,
			  transition: 'transform ease-out 0.45s'
			}}>
			  {
				this.state.images.map((image, i) => (
				  <Slide key={i} image={image} />
				))
				}
				
		  </div>
  
	
		 {this.DelayedTimeout()}
		
		</div>
	  );
	}
  }
  
  export default Slider