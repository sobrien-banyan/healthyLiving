// ***************** change theme ***********************
function changeTheme(number) {
var targetDiv = $(".targeted-theme");
var mainElement = $("html");
var themeCheck1 = $(".themeCheck1");
var themeCheck2 = $(".themeCheck2");
var themeCheck3 = $(".themeCheck3")
var themeCheck4 = $(".themeCheck4")
var themeCheck5 = $(".themeCheck5")

if(number === 1){
    themeCheck1[0].className = themeCheck1[0].className.replace("w3-hide", "w3-show");
    themeCheck2[0].className = themeCheck2[0].className.replace("w3-show", "w3-hide");
  for(let i = 0; i < targetDiv.length; i++){
    targetDiv[i].className = targetDiv[i].className.replace("color-theme-black", "color-theme-white");
  }
}
if(number === 2){
    themeCheck2[0].className = themeCheck2[0].className.replace("w3-hide", "w3-show");
    themeCheck1[0].className = themeCheck1[0].className.replace("w3-show", "w3-hide"); 
  for(let i = 0; i < targetDiv.length; i++){
    targetDiv[i].className = targetDiv[i].className.replace("color-theme-white", "color-theme-black");
  }
}
if(number === 3){
 if(mainElement[0].className.indexOf("color-theme-shadow") == -1){
   mainElement.removeClass("color-theme-contrast");
   mainElement.removeClass("color-theme-saturate");
   mainElement.addClass("color-theme-shadow");
   themeCheck3[0].className = themeCheck3[0].className.replace("w3-hide", "w3-show");
   themeCheck4[0].className = themeCheck4[0].className.replace("w3-show", "w3-hide");
   themeCheck5[0].className = themeCheck5[0].className.replace("w3-show", "w3-hide");

 } else {
   mainElement.removeClass("color-theme-shadow");
   themeCheck3[0].className = themeCheck3[0].className.replace("w3-show", "w3-hide");
 }
}
if(number === 4){
  if(mainElement[0].className.indexOf("color-theme-contrast") == -1){
    mainElement.removeClass("color-theme-shadow");
    mainElement.removeClass("color-theme-saturate");
    mainElement.addClass("color-theme-contrast");
    themeCheck4[0].className = themeCheck4[0].className.replace("w3-hide", "w3-show");
    themeCheck3[0].className = themeCheck3[0].className.replace("w3-show", "w3-hide");
    themeCheck5[0].className = themeCheck5[0].className.replace("w3-show", "w3-hide");
  } else {
    mainElement.removeClass("color-theme-contrast");
    themeCheck4[0].className = themeCheck4[0].className.replace("w3-show", "w3-hide");
 
  } 
 } 
 if(number === 5){
  if(mainElement[0].className.indexOf("color-theme-saturate") == -1){
    mainElement.removeClass("color-theme-contrast");
    mainElement.removeClass("color-theme-shadow");
    mainElement.addClass("color-theme-saturate");
    themeCheck5[0].className = themeCheck5[0].className.replace("w3-hide", "w3-show");
    themeCheck3[0].className = themeCheck3[0].className.replace("w3-show", "w3-hide");
    themeCheck4[0].className = themeCheck4[0].className.replace("w3-show", "w3-hide");
  } else {
    mainElement.removeClass("color-theme-saturate");
    themeCheck5[0].className = themeCheck5[0].className.replace("w3-show", "w3-hide");
 
  }
 }

}



// *********************modal section *******************************
function onClickModal(n) {

// Get the modal
var modal = document.getElementById(`hvacModal${n}`);
//  open the modal
  modal.style.display = "block";
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function closeModal (number) {
// Get the modal
var modal = document.getElementById(`hvacModal${number}`);
  modal.style.display = "none";

}

// *********************end modal section *******************************







// random picture selector for top img 
function picSelector() {
    //  random pic selector
    const mainPics = ["url('./resources/assets/img/nurse-2.jpg')", "url('./resources/assets/img/usana-products.jpg')", "url('./resources/assets/img/usana-products.jpg')","url('./resources/assets/img/nurse-2.jpg')"];
  const mainPics2 =   ["url('./resources/assets/img/blueberries.jpg')", "url('./resources/assets/img/generic-personal-care-5-small.jpg')", "url('./resources/assets/img/blueberries.jpg')","url('./resources/assets/img/generic-personal-care-5-small.jpg')",];
  $('.bgimg-1-1').css({'background-image': mainPics[Math.floor(Math.random(mainPics.length) * 4)]})
  $('.bgimg-1-2').css({'background-image': mainPics2[Math.floor(Math.random(mainPics.length) * 4)]})

};

picSelector();



//************ */ owl script for images*******************
//  :: 3.0 Sliders Active Code
 if ($.fn.owlCarousel) {
    var welcomeSlide = $('.owl-carousel');
    
    welcomeSlide.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        speed: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

}






