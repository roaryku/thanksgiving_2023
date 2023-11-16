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












