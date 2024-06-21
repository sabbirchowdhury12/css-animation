const menuBar = document.getElementById("menuBar");
const logo = document.getElementById("logo");
const socialLine = document.getElementById("social-line");
const navMenuBox = document.getElementById("nav-menu-box");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  logo.classList.toggle("active");
  socialLine.classList.toggle("active");
  navMenuBox.classList.toggle("active");

  const icon = menuBar.querySelector("i");
  if (menuBar.classList.contains("active")) {
    icon.className = "fa-solid fa-times"; // Change to a 'close' icon
  } else {
    icon.className = "fa-solid fa-bars"; // Change back to the 'menu' icon
  }
});

let slide_data = [
  {
    src: "https://images.unsplash.com/photo-1506765336936-bb05e7e06295?ixlib=rb-0.3.5&s=d40582dbbbb66c7e0812854374194c2e&auto=format&fit=crop&w=1050&q=80",
    title: "Slide 1",
    copy: " ADIPISCING ELIT.",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww",
    title: "Slide 2",
    copy: "DOLOR SIT AMET, .",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
    title: "Slide 3",
    copy: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
    title: "Slide 4",
    copy: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
  },
];

let slides = [],
  captions = [];

let autoplay = setInterval(function () {
  nextSlide();
}, 5000);

let container = document.getElementById("container");
let leftSlider = document.getElementById("left-col");
let count = document.getElementById("count");
let countItem = 1;
count.classList.remove("active");

// console.log(leftSlider);
let down_button = document.getElementById("down_button");
let caption = document.getElementById("slider-caption");
let caption_heading = caption.querySelector("caption-heading");

down_button.addEventListener("click", function (e) {
  e.preventDefault();

  // clearInterval(autoplay);
  nextSlide();
  // autoplay;
});

for (let i = 0; i < slide_data.length; i++) {
  let slide = document.createElement("div"),
    caption = document.createElement("div"),
    slide_title = document.createElement("div");

  count.classList.add("count-slide");
  count.innerHTML = i;
  slide.classList.add("slide");
  slide.setAttribute("style", "background:url(" + slide_data[i].src + ")");
  caption.classList.add("caption");
  slide_title.classList.add("caption-heading");
  slide_title.innerHTML = "<h1>" + slide_data[i].title + "</h1>";

  switch (i) {
    case 0:
      slide.classList.add("current");
      caption.classList.add("current-caption");
      break;
    case 1:
      slide.classList.add("next");
      caption.classList.add("next-caption");
      break;
    case slide_data.length - 1:
      slide.classList.add("previous");
      caption.classList.add("previous-caption");
      break;
    default:
      break;
  }
  caption.appendChild(slide_title);
  caption.insertAdjacentHTML(
    "beforeend",
    '<div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>'
  );
  slides.push(slide);
  captions.push(caption);
  leftSlider.appendChild(slide);
  container.appendChild(caption);
}
// console.log(slides);

function nextSlide() {
  // Get the count element

  // Toggle the animation class
  count.classList.remove("animate-count");
  void count.offsetWidth; // Trigger a reflow, flushing the CSS changes
  count.classList.add("animate-count");

  // Proceed with the rest of the slide change logic
  slides[0].classList.remove("current");
  slides[0].classList.add("previous", "change");
  slides[1].classList.remove("next");
  slides[1].classList.add("current");
  slides[2].classList.add("next");
  let last = slides.length - 1;
  slides[last].classList.remove("previous");

  captions[0].classList.remove("current-caption");
  captions[0].classList.add("previous-caption", "change");
  captions[1].classList.remove("next-caption");
  captions[1].classList.add("current-caption");
  captions[2].classList.add("next-caption");
  let last_caption = captions.length - 1;

  captions[last].classList.remove("previous-caption");

  let placeholder = slides.shift();
  let captions_placeholder = captions.shift();
  slides.push(placeholder);
  captions.push(captions_placeholder);

  if (countItem >= slide_data.length) {
    countItem = 1;
  } else {
    countItem++;
  }
  count.innerHTML = countItem;
}
count.innerHTML = countItem;
count.classList.remove("active");
let heading = document.querySelector(".caption-heading");

// https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
function whichTransitionEvent() {
  var t,
    el = document.createElement("fakeelement");

  var transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd",
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();
caption.addEventListener(transitionEvent, customFunction);

function customFunction(event) {
  caption.removeEventListener(transitionEvent, customFunction);
  console.log("animation ended");

  // Do something when the transition ends
}

const accordion = document.getElementsByClassName("accordion-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

function myFunction() {
  // Move loader before hiding it
  const loader = document.getElementById("loader");

  // Set timeout to hide loader and show main content
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
