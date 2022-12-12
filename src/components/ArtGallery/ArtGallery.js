import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";
import "./ArtGallery.css"

export const ArtGallery = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  let slides = [
    {
      key: 1,
      content: <img src="https://img1.wsimg.com/isteam/ip/b20bdfaf-f876-484d-9d35-e3fe0a768c37/Goldenway.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800" alt="1" />
    },
    {
      key: 2,
      content: <img src="https://img1.wsimg.com/isteam/ip/b20bdfaf-f876-484d-9d35-e3fe0a768c37/Golden%20Green%20Road.jpg/:/cr=t:16.67%25,l:0%25,w:66.67%25,h:66.67%25/rs=w:1300,h:800" alt="2" />
    },
    {
      key: 3,
      content: <img src="https://img1.wsimg.com/isteam/ip/b20bdfaf-f876-484d-9d35-e3fe0a768c37/Nature%20Road.jpg/:/cr=t:16.67%25,l:0%25,w:66.67%25,h:66.67%25/rs=w:1300,h:800" alt="3" />
    },
    {
      key: 4,
      content: <img src="https://img1.wsimg.com/isteam/ip/b20bdfaf-f876-484d-9d35-e3fe0a768c37/Starfall.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800" alt="4" />
    },
    {
      key: 5,
      content: <img src="https://img1.wsimg.com/isteam/ip/b20bdfaf-f876-484d-9d35-e3fe0a768c37/Blaze%20of%20Glory.jpg/:/rs=w:1300,h:800" alt="5" />
    },
    {
      key: 6,
      content: <img src="https://img1.wsimg.com/isteam/ip/b20bdfaf-f876-484d-9d35-e3fe0a768c37/Nature%20Road.jpg/:/cr=t:16.67%25,l:0%25,w:66.67%25,h:66.67%25/rs=w:1300,h:800" alt="6" />
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  const onChangeInput = (e) => {
    setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      style={{ width: "80%", height: "500px", margin: "0 auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="carosoul"
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      {/* <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div>
          <label>Go to slide: </label>
          <input name="goToSlide" onChange={onChangeInput} />
        </div>
        <div>
          <label>Offset Radius: </label>
          <input name="offsetRadius" onChange={onChangeInput} />
        </div>
        <div>
          <label>Show navigation: </label>
          <input
            type="checkbox"
            checked={state.showNavigation}
            name="showNavigation"
            onChange={(e) => {
              setState({ showNavigation: e.target.checked });
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.gentle });
            }}
            disabled={state.config === config.gentle}
          >
            Gentle Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.slow });
            }}
            disabled={state.config === config.slow}
          >
            Slow Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.wobbly });
            }}
            disabled={state.config === config.wobbly}
          >
            Wobbly Transition
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({ config: config.stiff });
            }}
            disabled={state.config === config.stiff}
          >
            Stiff Transition
          </button>
        </div>
      </div> */}
    </div>
  );
};
