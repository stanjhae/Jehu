import React from 'react';
import './ScrollToTop.css';
import scrollIcon from '../../images/arrowPointingUp.png';

class ScrollButton extends React.Component {
  state = {
    intervalId: 0,
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    const intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs,
    );
    this.setState({ intervalId });
  }

  render() {
    return (
      <div onClick={() => this.scrollToTop()} className="scrollButton">
        <img alt="scrollToTop" className="scrollToTopIcon" src={scrollIcon} />
      </div>
    );
  }
}

export default ScrollButton;
