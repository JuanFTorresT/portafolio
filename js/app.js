//circulo html
let circulohtml = document.querySelector(".circlehtml");
circulohtml.style.animationPlayState= "paused";

//circlocss
let circulocss = document.querySelector(".circlecss");
circulocss.style.animationPlayState= "paused";

//circlojs
let circulojs = document.querySelector(".circlejs");
circulojs.style.animationPlayState= "paused";

//circlowordpress
let circulowordpress = document.querySelector(".circlewordpress");
circulowordpress.style.animationPlayState= "paused";

//circlofigma
let circulofigma = document.querySelector(".circlefigma");
circulofigma.style.animationPlayState= "paused";

//circlofigma
let circulophotoshop = document.querySelector(".circlephotoshop");
circulophotoshop.style.animationPlayState= "paused";

let circuloillustrator = document.querySelector(".circleillustrator");
circuloillustrator.style.animationPlayState= "paused";

window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
			console.log("Posición del scroll: " + scrollPosition + "px" + typeof scrollPosition);

      if (window.innerWidth > 768) {
        if (scrollPosition >= 1300) {
        
          //circulo html

          circulohtml.style.animationPlayState= "running";

          //circulo css

          circulocss.style.animationPlayState= "running";

          //circulo js

          circulojs.style.animationPlayState= "running";

          //circulo wordpress

          circulowordpress.style.animationPlayState= "running";

          //circulo figma

          circulofigma.style.animationPlayState= "running";

          //circulo photoshop

          circulophotoshop.style.animationPlayState= "running";

          //circulo illustrator

          circuloillustrator.style.animationPlayState= "running";
  
  
        }
      }else{
        if (scrollPosition >= 1300) {
          //circulo html

          circulohtml.style.animationPlayState= "running";

          //circulo css

          circulocss.style.animationPlayState= "running";

          //circulo js

          circulojs.style.animationPlayState= "running";

          //circulo wordpress

          circulowordpress.style.animationPlayState= "running";

          //circulo figma

          circulofigma.style.animationPlayState= "running";

          //circulo photoshop

          circulophotoshop.style.animationPlayState= "running";

          //circulo illustrator

          circuloillustrator.style.animationPlayState= "running";
        }
      }
      
      
	});

//---------------------------------------------------------



//javascript tarjetas

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //WAVES

  //WAVE 1
  var myWave = $('#myID').wavify({
    height: 18,
    bones: 2,
    amplitude: 40,
    color: '#132142',
    speed: .25
  });

  //WAVE 2

  var myWave = $('#myID2').wavify({
    height: 18,
    bones: 2,
    amplitude: 40,
    color: '#FFFFFF',
    speed: .25
  });

  //WAVE 3

  var myWave = $('#myID3').wavify({
    height: 18,
    bones: 2,
    amplitude: 40,
    color: '#132142',
    speed: .25
  });

  //WAVE 4

  var myWave = $('#myID4').wavify({
    height: 18,
    bones: 2,
    amplitude: 40,
    color: '#FFFFFF',
    speed: .25
  });

  //WAVE 5

  var myWave = $('#myID5').wavify({
    height: 18,
    bones: 2,
    amplitude: 40,
    color: '#132142',
    speed: .25
  });

    //WAVE 5

    var myWave = $('#myID6').wavify({
      height: 18,
      bones: 2,
      amplitude: 40,
      color: '#FFFFFF',
      speed: .25
    });