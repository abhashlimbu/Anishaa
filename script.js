const images = [
   "images/birthday1.jpg",
   "images/birthday2.jpg",
   "images/birthday3.jpg",
   "images/birthday4.jpg",
   "images/birthday5.jpg",
   "images/birthday6.jpg",
   "images/birthday7.jpg",
   "images/birthday8.jpeg",
   "images/birthday9.jpeg",
   "images/birthday10.jpeg",
   "images/birthday11.jpeg",
   "images/birthday12.jpeg",
   "images/birthday13.jpeg",
   "images/birthday14.jpeg",
   "images/birthday15.jpeg",
];
const bg = document.querySelector(".bg");
let index = 0;
let frame = 0;

setInterval(() => {
   bg.style.background = `url(${images[index]})`;
   index++;
   if (index == images.length) index = 0;
}, 1000);

const intscr= document.querySelectorAll(".introscreen");

for(i=0;i<intscr.length;i++){
    intscr[i].onclick = function(){
        this.style.display = "none";
    }
}
