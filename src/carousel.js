import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './carousel.css'
import trailerImg from './sddefault.jpg';
import milkyWayImg from './Milky_Way.jpg';

const items = [
  {
    src: trailerImg,
    altText: 'Goblets of Faith',
    caption: 'New Release: Dive into the Deep End - Goblets of Faith (2018/10)',
    type: 'video',
    modalSrc: 'https://www.youtube.com/embed/E9-JdUYOco8'
  },
  {
    src: milkyWayImg,
    altText: 'Goblets of Faith',
    caption: 'New Release: Dive into the Deep End - Goblets of Faith (2018/10)',
    type: 'image',
    modalSrc: ''
  }
];

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    var slides = items.map((item) => { 
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
        
        <a href="#top" className="modal-link" data-toggle="modal" data-target="#videoModal" data-type={item.type} data-videosrc={item.modalSrc}>
				  <img src={item.src} alt={item.altText} />
			  </a>

        <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default MyCarousel;