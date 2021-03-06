/* eslint-disable */
import gsap from "gsap";
import route from "./router"

export default class {
  border = document.querySelectorAll('.border span');
  col = document.querySelectorAll(".col");
  navbar = document.querySelector(".navbar-menu");
  content = document.querySelectorAll(".content");


  runBorder() {
    const tl = gsap.timeline();

    gsap.set(this.border[0], { width: 0, });
    gsap.set(this.border[1], { height: 0 });
    gsap.set(this.border[2], { width: 0 });
    gsap.set(this.border[3], { height: 0 });

    gsap.set(this.col[0], { x: "-100vw" });
    gsap.set(this.col[1], { y: "100vh" });

    gsap.set(this.content, { opacity: 0 });


    gsap.set(this.navbar, { opacity: 0 })

    // border
    tl.to(this.border[0], { width: "100vw", ease: "power2.in", duration: 2 });
    tl.to(this.border[1], { height: "100vh", ease: "none", duration: 1 / 3 });
    tl.to(this.border[2], { width: "100vw", ease: "none", duration: 1 / 3 });
    tl.to(this.border[3], { height: "100vh", ease: "none", duration: 1 / 3 });

    // body
    tl.to(this.col[0], { x: 0, ease: "power2.out", duration: 1 / 1.5 }, "-=0.07");
    tl.to(this.col[1], { y: 0, ease: "power2.out", duration: 1 / 1.5, onComplete: () => { } }, "-=.4");

    tl.to(this.content, { opacity: 1, ease: "none", stagger: ".2" }, "-=.2");
    // navbar


    tl.to(this.navbar, { opacity: 1, ease: "none", duration: .2 }, "-=.2");


  }
  runBody() {
    const tl = gsap.timeline();

    gsap.set(this.col[0], { x: "-100vw" });
    gsap.set(this.col[1], { y: "100vh" });
    gsap.set(this.content, { opacity: 0 });

    tl.to(this.col[0], { x: 0, ease: "power2.out", duration: 1 / 1.5 }, "-=.2")
    tl.to(this.col[1], { y: 0, ease: "power2.out", duration: 1 / 1.5 }, "-=.4")
    tl.to(this.content, { opacity: 1, ease: "none", stagger: ".2" }, "-=.2");


  }

  leaveBody() {
    return new Promise(resolve => {
      const tl = gsap.timeline({
        onComplete: () => {
          resolve()
        }
      });
      tl.to(this.content[1], { duration: .2, opacity: 0, ease: "none", });
      tl.to(this.content[0], { duration: .2, opacity: 0, ease: "none", });


      tl.to(this.col[1], { y: "-100vh", ease: "back.in(1.7)", duration: 1 / 1.5 })
      tl.to(this.col[0], { x: "100vw", ease: "back.in(1.7)", duration: 1 / 1.5 }, "-=.4")
    })
  }

}