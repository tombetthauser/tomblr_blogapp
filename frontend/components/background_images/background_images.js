import React from "react";
import "../../../app/assets/javascripts/background";

const IMAGES = [
  "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=2140&q=80",
  "https://images.unsplash.com/photo-1513135467880-6c41603bbb5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
  "https://images.unsplash.com/photo-1584646276685-427d228ff95f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1906&q=80",
  "https://images.unsplash.com/photo-1584723886179-73a6c186832b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1572975478248-5e92875277d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  "https://images.unsplash.com/photo-1533478583204-680d4ff74891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80",
  "https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1476763752342-d5cf7e5eb6cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1584683661902-3a571a04f048?ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

class BackgroundImages extends React.Component {

  componentDidMount() {
    let currentImageIdx = 0;
    let animationFrame = 1;
    let randomImageIdx = Math.floor(Math.random() * IMAGES.length)
    currentImageIdx = randomImageIdx;

    let imageDivA;
    let imageDivB;

    setTimeout(() => {
      imageDivA = document.querySelector(`.background-animation-div-1`);
      imageDivB = document.querySelector(`.background-animation-div-2`);
      imageDivA.style.backgroundImage = `url(${IMAGES[randomImageIdx]})`;
      setTimeout(() => {
        imageDivA.style.opacity = "1";
      }, 250)
    }, 250)

    setInterval(() => {
      while (randomImageIdx === currentImageIdx) {
        randomImageIdx = Math.floor(Math.random() * IMAGES.length);
      }
      currentImageIdx = randomImageIdx;

      if (animationFrame === 1) {
        imageDivB.style.backgroundImage = `url(${IMAGES[randomImageIdx]})`;
        setTimeout(() => {
          imageDivB.style.opacity = "1";
        }, 250)
        animationFrame = 2;
      } else {
        imageDivA.style.backgroundImage = `url(${IMAGES[randomImageIdx]})`;
        setTimeout(() => {
          imageDivB.style.opacity = "0";
        }, 250)
        animationFrame = 1;
      }
    }, 5000)
  }

  render() {
    return (
      <div>
        <div className="test-div"></div>
        <div className="background-animation-div-1 background-animation-div-shared"></div>
        <div className="background-animation-div-2 background-animation-div-shared"></div>
      </div>
    )
  }
}

export default BackgroundImages;