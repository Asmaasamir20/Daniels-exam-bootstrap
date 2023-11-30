
//  typing
 var typed = new Typed('#element', {
      strings: ['Larry Daniels','Designer','Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true,
    });

    
// nav
    const navbarLinks = document.getElementsByClassName('nav-link');
    const navbar = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
    
      if (currentScroll > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    
      for (let i = 0; i < navbarLinks.length; i++) {
        const section = document.querySelector(navbarLinks[i].hash);
    
        if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
          navbarLinks[i].classList.add('active');
        } else {
          navbarLinks[i].classList.remove('active');
        }
      }
    });



// progress
    var sectionId = "about";
    var codeExecuted = false;
    
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };
    
    var observer = new IntersectionObserver(callback, options);
    
    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!codeExecuted) {
                    var progressBar1 = document.getElementById("progress-bar-1");
                    var targetWidth1 = parseInt(progressBar1.getAttribute("aria-valuenow"));
                    var currentWidth1 = 10;
    
                    var progressBar2 = document.getElementById("progress-bar-2");
                    var targetWidth2 = parseInt(progressBar2.getAttribute("aria-valuenow"));
                    var currentWidth2 = 10;
    
                    var progressBar3 = document.getElementById("progress-bar-3");
                    var targetWidth3 = parseInt(progressBar3.getAttribute("aria-valuenow"));
                    var currentWidth3 = 10;
    
                    var animation1 = setInterval(frame1, 10);
                    function frame1() {
                        if (currentWidth1 > targetWidth1 || currentWidth1 > 95) {
                            clearInterval(animation1);
                        } else {
                            progressBar1.style.width = currentWidth1 + "%";
                            progressBar1.querySelector("span:last-child").textContent = currentWidth1;
                            currentWidth1++;
                        }
                    }
    
                    var animation2 = setInterval(frame2, 10);
                    function frame2() {
                        if (currentWidth2 > targetWidth2 || currentWidth2 > 80) {
                            clearInterval(animation2);
                        } else {
                            progressBar2.style.width = currentWidth2 + "%";
                            progressBar2.querySelector("span:last-child").textContent = currentWidth2;
                            currentWidth2++;
                        }
                    }
    
                    var animation3 = setInterval(frame3, 10);
                    function frame3() {
                        if (currentWidth3 > targetWidth3 || currentWidth3 > 90) {
                            clearInterval(animation3);
                        } else {
                            progressBar3.style.width = currentWidth3 + "%";
                            progressBar3.querySelector("span:last-child").textContent = currentWidth3;
                            currentWidth3++;
                        }
                    }
    
                    codeExecuted = true;
                }
            } else {
                codeExecuted = false;
            }
        });
    }
    
    var target = document.getElementById(sectionId);
    observer.observe(target);


// jqueeru
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
          items:1,
          dots:true,
          nav:false,
          loop:true,
          autoplay:true,
          autoplayTimeout:4000,
    });
});



// COunter ///////////////////////////////////////////////////

// Counter
var counters = document.querySelectorAll(".counter-num p");
var speed = 2000; // The lower the number, the faster the counter

function animateCounter(target) {
  var count = 0;
  var targetNumber = parseInt(target.dataset.target);
  var increment = Math.ceil(targetNumber / (speed / 16)); // Increase value every 16ms for smooth animation

  var animation = setInterval(function () {
    count += increment;
    target.innerText = count;

    if (count >= targetNumber) {
      target.innerText = targetNumber; // Ensure final value is accurate
      clearInterval(animation);
    }
  }, 16);
}

function startCounters() {
  counters.forEach(function (counter) {
    animateCounter(counter);
  });
}

// Intersection Observer
var counterSection = document.querySelector(".counter");

var observerOptions = {
  threshold: 0,
};

var resetObserver = new IntersectionObserver(function (resetEntries, observer) {
  resetEntries.forEach(function (resetEntry) {
    if (resetEntry.intersectionRatio === 0) {
      resetEntry.target.dataset.animated = "false";
    }
  });
}, observerOptions);

var counterObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && entry.target.dataset.animated !== "true") {
      startCounters();
      entry.target.dataset.animated = "true";
    }
  });
}, observerOptions);

counterObserver.observe(counterSection);
resetObserver.observe(counterSection);
