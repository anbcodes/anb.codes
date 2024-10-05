const animations = document.querySelectorAll('.animate, .fade-in');

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const callbackFunc: IntersectionObserverCallback = (entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  })
}

// Declare observer.
let observer = new IntersectionObserver(callbackFunc, options);

Array.from(animations).forEach((el) => observer.observe(el))
