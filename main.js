// Import our custom CSS for index.html
import "./scss/styles.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let gourde = document.querySelectorAll(".gourde");
let cardInfo = document.querySelectorAll(".info-card");

let w = window.matchMedia("(min-width: 992px)");


function scroolSlider(e) {
  if (e.matches) {
    console.log("desktop");

    gourde.forEach((element) => {
      element.classList.add("gourde_hover", "gourde_max_w");
    });

    cardInfo.forEach((e) => {
      e.classList.remove("info-card_no_hover");
      e.classList.add("info-card");
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#gsap-box-master",
        start: "top bottom",
        end: "+=300 center",
        scrub: 0.6,
        once: true,
      },
    });

    tl.from("#gsap-box-master", {
      xPercent: 100,
    });
    tl.from("#gsap-box-two", {
      xPercent: -100,
    });
    
  } else {
    console.log("mobile / tablette");

    let gl = gsap.timeline({
      defaults:{
        ease:"bounce",
      },
      scrollTrigger: {
        trigger: "#gsap-box-master",
        start: "top bottom",
        end: "+=3000 center",
        scrub: 0.6,
        once: true,
      },
    });

    gourde.forEach((element) => {
      element.style.opacity = 0;
      element.classList.remove("gourde_hover", "gourde_max_w");
      element.classList.add("mt-3");

      gl.to(element, {
        opacity: 1,
        scale: 1.5,
      });
      gl.to(element, {
        scale:1
      })
    });

    cardInfo.forEach((e) => {
      e.classList.remove("info-card");
      e.classList.add("info-card_no_hover");
    });


  }
}

scroolSlider(w);
w.addEventListener("change", scroolSlider);
