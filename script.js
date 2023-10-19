//got 4 images =4 (0,1,2,3)
// flag = flag+x
//left button
// flag = 2 + (-1)=1
//right button
// flag = 2+1 =3

let flag = 0;
function controller(x) {
  flag = flag + x;
  slideShow(flag);
}

slideShow(flag);
function slideShow(num) {
  let slides = document.getElementsByClassName("slide");
  //reset back to zero
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  //if number less than 0
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  //hide the other piture
  for (let y of slides) {
    y.style.display = "none";
  }
  console.log(num);
  slides[num].style.display = "block";
}
