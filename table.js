  const myImg=document.querySelector(".demo");

  function overly1(){
    document.querySelector(".demo").setAttribute("style","transform:scale(1.2);opacity:0.5");
    
  }
  function overly2(){
    document.querySelector(".demo").removeAttribute("style");
  }


  myImg.addEventListener("mouseenter",overly1);
  myImg.addEventListener("mouseleave",overly2);

