// function hello () {
//     alert('Hey!');
// }
// setInterval(hello, 6000);

// function hello () {
//     alert('How are you?');
// }
// setInterval(hello, 2000)

// const colorArray = ['#F2FFE9', '#F1EAFF', '#E0F4FF', '#D2E3C8','#D0A2F7', '#87C4FF'];
// setInterval(colorChange, 1000);
// let i = 0;

// function colorChange () {
//     document.body.style.backgroundColor = colorArray[i];
//     i++;

//     if(i > colorArray.length) {
//         i = 0;
//     }
// }

// function calculateNumber(number) {
//     if(number%2 === 0){
//         console.log("EVEN NUMBER")
//     }
//     else{
//         console.log("ODD NUMBER")
//     }
// }
// calculateNumber(5)

// function calculateNumbers () {
//        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 23, 24, 27];

//        const calculate = numbers.filter(number =>
//          number % 2 === 0) 
//         alert('Even number: ' + calculate);
       
// }

// calculateNumbers();

// function getEvenNumbers() {
//     const numbers = [1,2,3,4,5,6,7,8,9,10, 22, 23,24,27];

//     const calculate = numbers.filter(number => number%2 === 0);
//     alert('Чётные числа: ' + calculate);
// }

// getEvenNumbers() 


// const par = document.querySelector('#par');
// const btn = document.querySelector('#submit');

// btn.addEventListener('click', generateNumber);

// function generateNumber() {
//     const randomNumber = Math.floor(Math.random () * 40);
//     document.querySelector('#par').textContent = randomNumber;
//     console.log(submit);
// }

// const par = document.querySelector('#par');
// const button = document.querySelector('#submit');

// button.addEventListener('click', randomNumberGet);

// // one way
// function randomNumberGet () {
//     const randomNumber = Math.random() * 40;
//     const newNumber = Math.floor(randomNumber)
//     document.querySelector('#par').textContent = newNumber;
// }
// // second way
// function generateNumber() {
//         const randomNumber = Math.floor(Math.random () * 40);
//       document.querySelector('#par').textContent = randomNumber;
// }    

// const now = new Date();
// console.log(now);

// const myDate = new Date();
// alert(myDate);

// const myDate = new Date();
// const date = myDate.getDate()
// console.log(date)
// const month = myDate.getMonth();
// console.log(month + 1)

// THANKSGIVING COUNTDOWN

function thanksCountDown () {
  const thanksDate = new Date ("November 23, 2023 00:00");
  const now = new Date ();
  const difference = thanksDate - now;

  const second = 1000;
  const minute = 60 * 1000;
  const hour = 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(difference / day);
  document.querySelector(".days").textContent = displayDay
  
  const displayHour = Math.floor((difference % day) / hour);
  document.querySelector(".hours").textContent = displayHour
  
  const displayMinute = Math.floor((difference % hour) / minute);
  document.querySelector(".minutes").textContent = displayMinute
  
  const displaySecond = Math.floor((difference % minute) / second);
  document.querySelector(".seconds").textContent = displaySecond

  if (difference <= 0 ) {
       document.querySelector(".days").textContent = 0;
       document.querySelector(".hours").textContent = 0;
       document.querySelector(".minutes").textContent = 0;
       document.querySelector(".seconds").textContent = 0;
       clearInterval(timerId);
       happyThanksgiving();

//        const thanks = document.querySelectorAll(".thanksgiving");
//        const three = document.querySelectorAll("h3");
//        const four = document.querySelectorAll("h4")
//        thanks.forEach(function(item) {
//        item.classList.add("threeChange");
// })
     
//       three.forEach(function(item){
//            item.classList.add("threeChange");
//        })

//        four.forEach(function(item){
//         item.classList.add("threeChange");
//     })

   }
  }
  

let timerId = setInterval(thanksCountDown, 1000);

 function happyThanksgiving () {
    const heading = document.querySelector("h1");
    const paragrapg = document.querySelector("p");
    const block = document.querySelector(".container")
    
    heading.textContent = "Happy Thanksgiving !!!";
    heading.classList.add("headerChanged");
    paragrapg.style.display = "none";
    block.style.display = "none"
 }

 const button = document.querySelector("#myButton");
 button.addEventListener("click", () => {
    document.querySelector("#myAudio").play() 
    button.classList.add("red");
})

button.addEventListener("dblclick", () => {
   document.querySelector("#myAudio").pause()
   button.classList.remove("red");
})


var LeafScene = function(el) {
   this.viewport = el;
   this.world = document.createElement('div');
   this.leaves = [];

   this.options = {
     numLeaves: 20,
     wind: {
       magnitude: 1.2,
       maxSpeed: 12,
       duration: 300,
       start: 0,
       speed: 0
     },
   };

   this.width = this.viewport.offsetWidth;
   this.height = this.viewport.offsetHeight;

   // animation helper
   this.timer = 0;

   this._resetLeaf = function(leaf) {

     // place leaf towards the top left
     leaf.x = this.width * 2 - Math.random()*this.width*1.75;
     leaf.y = -10;
     leaf.z = Math.random()*200;
     if (leaf.x > this.width) {
       leaf.x = this.width + 10;
       leaf.y = Math.random()*this.height/2;
     }
     // at the start, the leaf can be anywhere
     if (this.timer == 0) {
       leaf.y = Math.random()*this.height;
     }

     // Choose axis of rotation.
     // If axis is not X, chose a random static x-rotation for greater variability
     leaf.rotation.speed = Math.random()*10;
     var randomAxis = Math.random();
     if (randomAxis > 0.5) {
       leaf.rotation.axis = 'X';
     } else if (randomAxis > 0.25) {
       leaf.rotation.axis = 'Y';
       leaf.rotation.x = Math.random()*180 + 90;
     } else {
       leaf.rotation.axis = 'Z';
       leaf.rotation.x = Math.random()*360 - 180;
       // looks weird if the rotation is too fast around this axis
       leaf.rotation.speed = Math.random()*3;
     }

     // random speed
     leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
     leaf.ySpeed = Math.random() + 1.5;

     return leaf;
   }

   this._updateLeaf = function(leaf) {
     var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

     var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
     leaf.x -= xSpeed;
     leaf.y += leaf.ySpeed;
     leaf.rotation.value += leaf.rotation.speed;

     var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
     if (leaf.rotation.axis !== 'X') {
       t += ' rotateX(' + leaf.rotation.x + 'deg)';
     }
     leaf.el.style.webkitTransform = t;
     leaf.el.style.MozTransform = t;
     leaf.el.style.oTransform = t;
     leaf.el.style.transform = t;

     // reset if out of view
     if (leaf.x < -10 || leaf.y > this.height + 10) {
       this._resetLeaf(leaf);
     }
   }

   this._updateWind = function() {
     // wind follows a sine curve: asin(b*time + c) + a
     // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
     // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

     if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

       this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
       this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
       this.options.wind.start = this.timer;

       var screenHeight = this.height;

       this.options.wind.speed = function(t, y) {
         // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
         var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
         return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
       }
     }
   }
 }


 










