import React from 'react'

import DangerousHTML from 'dangerous-html/react'

import './slider.css'

const Slider = (props) => {
  return (
    <div className="slider-container">
      <div className="slider-div">
        <DangerousHTML
          html={`<script>
    "use strict";
    const arrowBtnLeft = document.querySelector(".btn-arrow-left");
    const arrowBtnRight = document.querySelector(".btn-arrow-right");

    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");

    let curSlide = 0;

    // functions
    const goToSlide = (slide) => {
        slides.forEach((s, i) => {
            s.style.transform = \`translateX(\${100 * (i - slide)}%)\`;
        });
    };

    const nextSlide = function () {
        curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const createDots = () => {
        slides.forEach((_, i) =>
            dotsContainer.insertAdjacentHTML(
                "beforeend",
                \`<button class='dot' data-slide='\${i}'></button>\`
            )
        );
    };

    const activateDot = (slide) => {
        document
            .querySelectorAll(".dot")
            .forEach((dot) => dot.classList.remove("dot--active"));
        document
            .querySelectorAll(\`.dot[data-slide="\${slide}"]\`)
            .forEach((dot) => dot.classList.add("dot--active"));
    };

    // inital
    const init = () => {
        goToSlide(0);
        createDots();
        activateDot(0);
    };
    init();

    // event listeners
    arrowBtnLeft.addEventListener("click", prevSlide);
    arrowBtnRight.addEventListener("click", nextSlide);

    dotsContainer.addEventListener("click", function (e) {
        // if needed to work only on dots and not on dot container
        if (e.target.classList.contains("dot")) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-family: sans-serif;
        color: #fff;
    }

    h1 {
        font-size: 4.8rem;
    }

    .carousel {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* margin: 20rem auto; */
        position: relative;
    }

    /* CONTROLS */
    .btn-arrow {
        width: 3.6rem;
        height: 3.6rem;

        background-color: #fff;

        border: none;
        border-radius: 50%;
        box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

        cursor: pointer;
        position: absolute;
        transform: translate(-50%, 0);

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 999;
    }

    .btn-arrow:hover,
    .btn-arrow:active {
        background-color: #e6e6e6;
    }

    .btn-arrow-left {
        top: 48%;
        left: 40;
        transform: translate(-50%, -50%);
    }

    .btn-arrow-right {
        top: 48%;
        right: 40;
        transform: translate(50%, -50%);
    }

    .icon {
        width: 2.4rem;
        height: 2.4rem;
    }

    /* SLIDES */
    .inner {
        position: relative;
        align-self: center;

        width: 100%;
        height: 100%;

        background-color: #6a0f81;

        /* border-radius: 30px; */

        overflow: hidden;
    }

    .container {
        list-style: none;
        /* transform: translate(0%); */
    }

    .slide {
        /* === TO CENTER TEXT === */
        display: flex;
        justify-content: center;
        align-items: center;
        /* ====================== */
        padding: 4rem;

        position: absolute;

        background-color: #992bb4;

        width: 100%;
        height: 100%;

        transition: all 0.3s;
    }


    .slide-1 {
        background-image: url("https://iili.io/H7XiOVp.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

    }

    .slide-2 {
        background-image: url("https://iili.io/HYFK5jn.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .slide-3 {
        background-image: url("https://iili.io/H7XihOJ.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>

<body>
    <div class="carousel">
        <button class="btn-arrow btn-arrow-left">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </button>
        <button class="btn-arrow btn-arrow-right">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </button>
        <div class="inner">
            <ul class="container">
                <li class="slide slide-1">
                    <!-- <h1>SLIDE 1</h1> -->
                </li>
                <li class="slide slide-2">
                    <!-- <h1>SLIDE 2</h1> -->
                </li>
                <li class="slide slide-3">
                    <!-- <h1>SLIDE 3</h1> -->
                </li>
            </ul>
        </div>
        <div class="dots"></div>
    </div>
</body>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Slider
