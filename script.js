document.addEventListener('DOMContentLoaded', () => {
    const langLv = document.getElementById('lang-lv');
    const langEn = document.getElementById('lang-en');

    langLv.addEventListener('click', () => {
        changeLanguage('lv');
    });

    langEn.addEventListener('click', () => {
        changeLanguage('en');
    });
});

document.getElementById('changeLang').addEventListener('click', function() {
    // Assuming you have 'index-en.html' for English and 'index-lv.html' for Latvian.
    const isEnglish = window.location.href.includes('index-eng.html');
    
    if (isEnglish) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index-eng.html';
    }
});



function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}

var scrollButton = document.getElementById('scrollButton');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.classList.add('show-button');
  } else {
      scrollButton.classList.remove('show-button');
  }
};

// var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext('2d');

//     canvas.width = 300;
//     canvas.height = 300;

// var stars = [], // Array that contains the stars
//     FPS = 120, // Frames per second
//     x = 7, // Number of stars
//     mouse = {
//       x: 0,
//       y: 0
//     };  // mouse location

// // Push stars to array

// for (var i = 0; i < x; i++) {
//   stars.push({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     radius: Math.random() * 1 + 1,
//     vx: Math.floor(Math.random() * 50) - 25,
//     vy: Math.floor(Math.random() * 50) - 25
//   });
// }

// // Draw the scene

// function draw() {
//   ctx.clearRect(0,0,canvas.width,canvas.height);
  
//   ctx.globalCompositeOperation = "lighter";
  
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillStyle = 'black';
//     ctx.stroke();
//   }
  
//   ctx.beginPath();
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var starI = stars[i];
//     ctx.moveTo(starI.x,starI.y); 
//     if(distance(mouse, starI) < 50) ctx.lineTo(mouse.x, mouse.y);
//     for (var j = 0, x = stars.length; j < x; j++) {
//       var starII = stars[j];
//       if(distance(starI, starII) < 200) {
//         //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
//         ctx.lineTo(starII.x,starII.y); 
//       }
//     }
//   }
//   ctx.lineWidth = 0.1;
//   ctx.strokeStyle = "#383838";
//   ctx.stroke();
// }

// function distance( point1, point2 ){
//   var xs = 0;
//   var ys = 0;
 
//   xs = point2.x - point1.x;
//   xs = xs * xs;
 
//   ys = point2.y - point1.y;
//   ys = ys * ys;
 
//   return Math.sqrt( xs + ys );
// }

// // Update star locations

// function update() {
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     s.x += s.vx / FPS;
//     s.y += s.vy / FPS;
    
//     if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
//     if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
//   }
// }

// var div = document.getElementById("canvas");

// canvas.addEventListener('mousemove', function(e){
// var rect = div.getBoundingClientRect();
//   mouse.x = e.clientX - rect.left;
//   mouse.y = e.clientY - rect.top
// });

// // Update and draw

// function tick() {
//   draw();
//   update();
//   requestAnimationFrame(tick);
// }

// tick();


// // VIEWPORT OBSERVER

// let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('animate');
//             observer.unobserve(entry.target);
//         }
//     });
// }, {threshold: 1});

// let targets = document.querySelectorAll('.content-r2');
// targets.forEach(target => {
//     observer.observe(target);
// });