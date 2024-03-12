import React, { Component } from 'react';
import './slidshow.css'
class Slideshow extends Component {
  state = {
    currentIndex: 0,
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  nextSlide = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const nextIndex = (currentIndex + 1) % images.length;
    this.setState({ currentIndex: nextIndex });
  };

  render() {
    const { currentIndex } = this.state;
    const { images } = this.props;
    const currentImage = images[currentIndex];

    return (
      <div>
        <img src={currentImage} alt="Slideshow" id='img'/>
      </div>
    );
  }
}

export default Slideshow;